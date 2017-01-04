const chalk  = require('chalk');
const fs     = require('fs');
const glob   = require('glob');
const lodash = require('lodash');
const ncp    = require('ncp').ncp;
const path   = require('path');
const rimraf = require('rimraf');
const spawn  = require('cross-spawn');

const TMP_FOLDER = path.join(__dirname, '..', '.tmp');
ncp.limit = 20;

module.exports = function build(dependency) {
  const ignoredFiles = dependency.ignore.map(i => path.join(dependency.destination, i));
  const existingFiles = [path.join(TMP_FOLDER, dependency.name)];

  if (! lodash.isEmpty(dependency)) {
    chain(
      deleteFiles(existingFiles),
      cloneRepo,
      copyFiles(path.join(TMP_FOLDER, dependency.name)),
      deleteFiles(ignoredFiles, { glob: true }),
      moveCustom
    )(dependency);
  } else {
    return handleError('No dependency found');
  }
};

/*
 * Temporary custom move method
 */
const moveCustom = (dependency) => {
  if (dependency.hasOwnProperty('move')) {
    // after chain
    const obj = dependency.move;
    const promises = Object.keys(dependency.move).map(key => copyFiles(obj[key].path)(obj[key]));

    return Promise.all(promises).then(results => {
      console.log(chalk.green('moved files'));
    })
    .catch(handleError)
  }
}

/*
 * This method is a promise wrapper to chain promises
 * it takes in the promises it has to process and returns
 * a function that takes in the dependency that should be
 * passed along the chain.
 */
function chain(...promises) {
  if (promises.length === 0) {
    return () => {
    };
  }

  const currentPromise = promises.shift();

  return (dependency) => {
    return currentPromise(dependency)
      .then(() => chain(...promises)(dependency))
      .catch(handleError);
  }
}

/*
 * This method spawns a child process that executes
 * the cloning of the dependency repository
 */
function cloneRepo(dependency) {
  const { name, repository, branch } = dependency;

  return new Promise((resolve, reject) => {
    const child = spawn('git',
      [
        'clone',
        '-b',
        branch,
        repository,
        `${TMP_FOLDER}/${name}`
      ],
      { stdio: 'inherit' }
    );

    child.on('error', (err) => {
      reject(err);
    });

    child.on('close', () => {
      resolve(dependency);
    })
  });
}

/*
 * This method spawns a child process that executes
 * the moving of the dependency files
 */
function copyFiles(filePath) {
  return (dependency) => {
    const { name, destination } = dependency;
    console.log('Copying files for dependency ' + name);

    return new Promise((resolve, reject) => {
      ncp(filePath, destination, { clobber: true }, function (err) {
        if (err) {
          return reject(err);
        }
        return resolve(dependency);
      });
    });
  }
}

function deleteFiles(files, options) {

  return (dependency) => {

    // Private helper
    const deleteFile = (file) => {
      return new Promise((resolve, reject) => {
        return fs.exists(file, (exists) => {
          if (!exists) {
            resolve(dependency);
          } else {
            rimraf(file, err => {
              if (err) {
                reject(err);
              }
              resolve(dependency);
            });
          }
        });
      });
    };

    // Private helper
    const globFile = (file) => {
      return new Promise((resolve, reject) => {
        return glob(file, {}, function (err, results) {
          if (err) {
            reject(err);
          }
          resolve(results);
        });
      });
    };

    const {name} = dependency;
    console.log(chalk.green('Cleaning up ' + name));
    console.log(files)

    if (options && options.glob) {
      const promises = files.map(globFile);
      return Promise.all(promises).then((results) => {
        let paths = lodash.flattenDeep(results);
        return Promise.all(
          paths.map(deleteFile)
        );
      });
    }

    return Promise.all(files.map(deleteFile));
  }
}

function handleError(err) {
  console.log(chalk.red(err));
}


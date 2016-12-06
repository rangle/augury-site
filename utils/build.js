const fs = require('fs'),
  ncp = require('ncp').ncp,
  path = require('path'),
  rimraf = require('rimraf'),
  spawn = require('cross-spawn'),
  chalk = require('chalk');

const TMP_FOLDER = path.join(__dirname, '..', '.tmp');
ncp.limit = 20;

module.exports = function build(dependency) {
  const ignoredFiles = dependency.ignore.map((i) => path.join(dependency.destination, i)),
    existingFiles = [path.join(TMP_FOLDER, dependency.name)],
    isValidDependency = validate(dependency);
  
  if (isValidDependency) {
    return chain(
      cleanFiles(existingFiles),
      cloneRepo,
      moveFiles(path.join(TMP_FOLDER, dependency.name)),
      cleanFiles(ignoredFiles)
    )(dependency);
  } else {
    return handleError('No dependency found');
  }
};

// chains promises together and passes the dependency along the pipeline
function chain(...promises) {
  if (promises.length === 0) {
    return () => { };
  }
  const currentPromise = promises.shift();
  return (dependency) => {
    return currentPromise(dependency)
      .then(() => chain(...promises)(dependency))
      .catch(handleError);
  }
}

function validate(dependency) {
  if (!dependency) {
    return false;
  }
  return true;
}

function cloneRepo(dependency) {
  const {name, repository, branch} = dependency;
  return new Promise((resolve, reject) => {
    const child = spawn('git', ['clone', '-b', branch, repository, `${TMP_FOLDER}/${name}`], { stdio: 'inherit' });

    child.on('error', (err) => {
      reject('Clone error - ', err);
    });

    child.on('close', () => {
      resolve(dependency);
    })
  });
}

function moveFiles(path) {
  return (dependency) => {
    const {name, destination} = dependency;
    console.log('Copying files for dependency ' + name)
    return new Promise((resolve, reject) => {
      ncp(path, destination, { clobber: true }, function (err) {
        if (err) {
          return reject(err);
        }
        return resolve(dependency);
      });
    });
  }
}

function cleanFiles(files) {
  return (dependency) => {
    const {name} = dependency;

    console.log(chalk.green('Cleaning up ' + name));

    return Promise.all(files.map(cleanFile));

    function cleanFile(file) {
      return new Promise((resolve, reject) => {
        return fs.exists(file, (exists) => {
          if (!exists) {
            resolve(dependency);
          } else {
            rimraf(file, (err) => {
              if (err) {
                reject(err);
              }
              resolve(dependency);
            });
          }
        });
      });
    }
  }
}

function handleError(err) {
  console.log(chalk.red(err));
}
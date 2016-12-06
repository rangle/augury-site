const fs = require('fs'),
  ncp = require('ncp').ncp,
  path = require('path'),
  rimraf = require('rimraf'),
  spawn = require('cross-spawn'),
  chalk = require('chalk');

const TMP_FOLDER = path.join(__dirname, '..', '.tmp');
ncp.limit = 20;

module.exports = function (dependency) {
  folderExists(dependency)
    .then(() => {
      cloneRepo(dependency)
        .then(() => {
          moveFiles(dependency)
            .then(() => {
              console.log('Finished transfer for ' + dependency.name)
            })
            .catch(handleError)
        })
        .catch(handleError)
    })
    .catch(handleError)
};


function cloneRepo({name, repository, branch}) {
  return new Promise((resolve, reject) => {
    const child = spawn('git', ['clone', '-b', branch, repository, `${TMP_FOLDER}/${name}`], {stdio: 'inherit'});

    child.on('error', (err) => {
      reject('Clone error - ', err);
    });

    child.on('close', () => {
      resolve(`Successfully cloned ${repository}`);
    })
  });
}

function moveFiles({name, destination, ignore}) {
  const depPath = path.join(TMP_FOLDER, name);
  return new Promise((resolve, reject) => {
    ncp(depPath, destination, {}, function (err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

function folderExists({name}) {
  return new Promise((resolve, reject) => {
    const depPath = path.join(TMP_FOLDER, name);
    if (fs.existsSync(depPath)) {
      return rimraf(depPath, (err) => {
        if (err) {
          return reject('folder error - ', err);
        }
        return resolve();
      });
    }
    resolve();
  });
}

function handleError(err) {
  console.log(chalk.red(err));
}
const chalk = require('chalk');
const cpx = require('cpx');

function folderCopy(folders) {

  for (folder in folders) {

    const dest = folders[folder];
    const s1 = chalk.green.bold(folder);
    const s2 = chalk.green.bold(dest);

    console.log(chalk.blue.bold(`Copying ${s1} to ${s2}`));

    cpx.copy(folder, dest, {}, err => {
      if (err) {
        throw err;
      }
    });

  }

}

module.exports = folderCopy;

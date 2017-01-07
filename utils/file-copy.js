const chalk = require('chalk');
const cpx = require('cpx');

function fileCopy(files) {

  for (file in files) {

    const dest = files[file];
    const s1 = chalk.green.bold(file);
    const s2 = chalk.green.bold(dest);

    console.log(chalk.blue.bold(`Copying ${s1} to ${s2}`));

    cpx.copy(file, dest, {}, err => {
      if (err) {
        throw err;
      }
    });

  }

}

module.exports = fileCopy;


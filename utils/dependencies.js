const fs = require('fs-extra'),
    cpx = require('cpx'),
    chalk = require('chalk');

const message = chalk.red.bold('Be careful moving around the folder structure, make sure all the necessary files are always copied');
console.log(message);


const files = {
    'src/main.js': 'www',
    'src/tools/prism.js': 'www/tools',
    'src/vendors/material-design-lite/material.min.js': 'www/vendors/material-design-lite',
    'src/vendors/material-design-lite/material.min.css': 'www/vendors/material-design-lite',
    'src/images/**/*': 'www/images',
    'src/demo/*': 'www/demo'
};

Object.keys(files).forEach(copy);

function copy(file) {
    const dest = files[file];

    const s1 = chalk.green.bold(file),
        s2 = chalk.green.bold(dest);

    console.log(chalk.blue.bold(`Copying ${s1} to ${s2}`));

    cpx.copy(file, dest, {}, function (err) {
        if (err) {
            throw err;
        }
    });
}


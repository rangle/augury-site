const chalk = require('chalk');
const folderCopy = require('./file-copy');
const message = chalk.red.bold('Be careful moving around the folder structure, make sure all the necessary files are always copied');
console.log(message);

folderCopy({
  'src/main.js': 'www',
  'src/tools/prism.js': 'www/tools',
  'src/vendors/material-design-lite/material.min.js': 'www/vendors/material-design-lite',
  'src/vendors/material-design-lite/material.min.css': 'www/vendors/material-design-lite',
  'src/images/**/*': 'www/images',
  'src/demo/*': 'www/demo'
});
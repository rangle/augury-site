var fs = require('fs-extra');
var cpx = require('cpx');

const files = {
    'src/main.js': 'www',
    'src/tools/prism.js': 'www/tools',
    'src/material-design-lite/material.min.js': 'www/material-design-lite',
    'src/material-design-lite/material.min.css': 'www/material-design-lite',
    'src/images/**/*': 'www/images',
    'src/demo/*': 'www/demo'
};

Object.keys(files).forEach(copy);

function copy(file) {
    const dest = files[file];
    cpx.copy(file, dest);
}
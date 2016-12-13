const build = require('./build');
const path = require('path');

const dependencies = [
  {
    destination: path.join(__dirname, '..', 'src', 'pages', 'docs'),
    name: 'augury-documentation',
    repository: "git@github.com:rangle/augury-documentation.git",
    branch: 'master',
    ignore: [
      'LICENSE',
      'README.md'
    ]
  }
];

dependencies.forEach(build);

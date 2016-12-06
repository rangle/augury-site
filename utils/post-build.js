const build = require('./build'),
  path = require('path');

const dependencies = [
  {
    destination: path.join(__dirname, '..', 'www', 'examples'),
    name: 'augury-examples',
    repository: "git@github.com:rangle/augury-examples.git",
    branch: 'master',
    ignore: [
      'LICENSE',
      'README.md'
    ]
  }
];

dependencies.forEach(build);

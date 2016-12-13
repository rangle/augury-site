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
      'README.md',
      '/**/src/',
      '/**/source/',
      '/**/.gitignore',
      '/**/.editorconfig',
      '/**/package.json',
      '/**/README.md',
      '/**/angular-cli.json',
      '/**/tsconfig.json',
      '/**/webpack.config.js',
      '/**/tslint.json'
    ]
  }
];

dependencies.forEach(build);

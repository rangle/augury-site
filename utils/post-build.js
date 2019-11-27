const build = require('./build');
const folderCopy = require('./file-copy');
const path = require('path');

const dependencies = [
  {
    destination: path.join(__dirname, '..', 'www', 'examples'),
    name: 'augury-examples',
    repository: "git@github.com:rangle/augury-examples.git",
    branch: 'master',
    buildScripts: ['yarn install', 'yarn build'],
    distFolder: 'dist/augury-examples',
    ignore: [
      '.git',
      'LICENSE',
      'README.md',
      '/**/src/',
      '/**/source/',
      '/**/.gitignore',
      '/**/.editorconfig',
      '/**/package.json',
      '/**/README.md',
      '/**/tsconfig.json',
      '/**/webpack.config.js',
      '/**/tslint.json',
      'www/demo'
    ]
  }
];

dependencies.forEach(build);

folderCopy({
  'src/pages/docs/guide/augury/images/**': 'www/pages/guides/images',
  'src/pages/docs/guide/architecture/images/**': 'www/pages/guides/images',
  'src/pages/docs/guide/dependency-injection/images/**': 'www/pages/guides/images',
  'src/pages/docs/guide/input-output-app/images/**': 'www/pages/guides/images',
  'src/pages/docs/guide/routes/images/**': 'www/pages/guides/images',
  'src/pages/docs/guide/module-list/images/**': 'www/pages/guides/images'
});

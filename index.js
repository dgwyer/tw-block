const { join } = require('path');

module.exports = {
  defaultValues: {
    title: 'Placeholder Title',
    folderName: 'src',
    editorScript: 'file:./index.js',
    editorStyle: 'file:./index.css',
    style: 'file:./style-index.css',
    npmDevDependencies: ['tailwind', 'autoprefixer', 'cssnano', 'postcss', 'postcss-cli', 'postcss-multiple-tailwind' ]
  },
  // templatesPath: join(__dirname, 'templates/plugin'),
  pluginTemplatesPath: join(__dirname, 'templates/plugin'),
  blockTemplatesPath: join(__dirname, 'templates/block'),
};
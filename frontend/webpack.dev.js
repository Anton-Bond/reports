const config = require('./webpack.config.js');

config.mode = 'development';
config.devtool = 'source-map';

// remove plugin that clears destination build folder
config.plugins.shift();

module.exports = config;

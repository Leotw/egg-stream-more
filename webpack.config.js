'use strict';
const merge = require('webpack-merge');
const webpackDevConfig = require('./client/config/webpack.dev');
const webpackProdConfig = require('./client/config/webpack.prod');

module.exports = merge(
  {
    entry: {
      app: './client/app.js'
    },
    devtool: 'source-map',
    plugins: [
      {
        imagemini: false
      }
    ]
  },
  process.env.NODE_ENV === 'development' ? webpackDevConfig : webpackProdConfig
);

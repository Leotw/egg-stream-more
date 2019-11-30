/* eslint valid-jsdoc: "off" */

'use strict';
const easywebpack = require('@easy-team/easywebpack-react');

const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_123456789';

  config.middleware = [];

  config.static = {
    maxAge: 0, // maxAge 缓存，默认 1 年
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'public')
  };

  exports.development = {
    watchDirs: ['build'], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
    ignoreDirs: ['client', 'public', 'config'] // 指定过滤的目录（包括子目录）
  };

  config.webpack = {
    webpackConfigList: easywebpack.getWebpackConfig(),
    hot: true
  };

  config.reactssr = {
    layout: path.join(appInfo.baseDir, 'client/view/layout.tpl')
  };

  config.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(appInfo.baseDir, 'logs')
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

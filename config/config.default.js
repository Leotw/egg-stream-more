/* eslint valid-jsdoc: "off" */

'use strict';
const easywebpack = require('@easy-team/easywebpack-react');

const path = require('path');
const fs = require('fs');
const packages = require('../package');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_123456789';

  /* 中间件 */
  config.middleware = ['page'];
  config.page = {
    enable: true,
    path: /(^\/client)|(^\/$|^\/\?)/
  };

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
    layout: path.join(appInfo.baseDir, 'client/view/layout.tpl'),
    afterRender: (html) => {
      const flex = fs.readFileSync(path.join(appInfo.baseDir, 'client/asset/js/flex.js'));
      return html.replace(/<link rel="stylesheet"/, `<script>${flex.toString()}</script><link rel="stylesheet"`);
    },
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

  config.version = packages.version;

  // add your user config here
  const userConfig = {
    // prod env
    dsn: {
      url: '39.100.135.194:8000',
      client: {
        key: '10c87434b11747e1bf25df161c05bf9d',
        project: '4'
      },
      server: {
        key: '9b3a4e5f2a1443158fd84f4a3aa9f465',
        project: '2'
      }
    },
    asset: {
      flex: (fs.readFileSync(path.join(appInfo.baseDir, 'client/asset/js/flex.js'))).toString()
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};

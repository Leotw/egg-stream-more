'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = exports = {};
  config.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join('/app/log/', 'egg-stream-more')
  };
  return config;
};

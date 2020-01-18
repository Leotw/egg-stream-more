'use strict';
const publicPath = process.env.EGG_SERVER_ENV === 'local' ? '/public' : '/static/public';
module.exports = {
  output: {
    publicPath
  }
};

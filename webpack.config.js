'use strict';
module.exports = {
  entry: {
    app: './client/app.js'
  },
  output: {
    publicPath: process.env.EGG_SERVER_ENV === 'stage' ? '/public/' : '/static/public'
  }
};

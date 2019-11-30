'use strict';

/** @type Egg.EggPlugin */
exports.static = true;

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};

exports.webpack = {
  enable: true,
  package: 'egg-webpack'
};

exports.webpackreact = {
  enable: true,
  package: 'egg-webpack-react'
};

exports.reactssr = {
  enable: true,
  package: 'egg-view-react-ssr'
};

exports.serviceworker = {
  enable: true,
  package: 'egg-serviceworker'
};



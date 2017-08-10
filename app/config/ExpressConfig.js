'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var webpackDev = require('webpack-dev-middleware');
var webpackHot = require('webpack-hot-middleware');

module.exports = function(App) {
  var config = require('../../webpack.config');
  var compiler = webpack(config);

  App.use(webpackDev(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  App.use(webpackHot(compiler));
  App.use(bodyParser.json());
  App.use(bodyParser.urlencoded({
  	extended: true
  }));
  App.use(express.static('./public'));
};
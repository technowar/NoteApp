var express = require('express');
var webpack = require('webpack');
var webpackDev = require('webpack-dev-middleware');
var webpackHot = require('webpack-hot-middleware');
var config = require('./webpack.config');

var compiler = webpack(config);
var app = express();

app.use(webpackDev(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHot(compiler));
app.use(express.static('./public'));
app.use('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function(error) {
  if (error) {
    throw error;
  }

  console.log('Starting server');
});
'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');
var mongoose = require('mongoose');

var models = path.join(__dirname, 'app/models');
var App = express();

fs.readdirSync(models).forEach(function(file) {
  if (~file.indexOf('.js')) {
    require(path.join(models, file));
  }
});

require('./app/config/ExpressConfig')(App);
require('./app/config/RouteConfig')(App);

connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen() {
  App.listen(3000, function(error) {
    if (error) {
      throw error;
    }

    console.log('Starting server');
  });
}

function connect() {
  var config = require('./app/config.json');
  var database = [
    'mongodb://',
    config.db.username,
    ':',
    config.db.password,
    '@ds133438.mlab.com:33438/',
    config.db.database
  ].join('');

  mongoose.Promise = global.Promise;

  return mongoose.connect(database, {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30
  }).connection;
}
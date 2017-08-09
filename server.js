'use strict';

var express = require('express');
var mongoose = require('mongoose');

var expressConfig = require('./app/config/ExpressConfig');
var routeConfig = require('./app/config/RouteConfig');
var config = require('./app/config.json');

var App = express();

expressConfig(App);
routeConfig(App);

require('./app/models/entry');

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
  var database = [
    'mongodb://',
    config.db.username,
    ':',
    config.db.password,
    '@ds133438.mlab.com:33438/',
    config.db.database
  ].join('');

  return mongoose.connect(database, {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30
  }).connection;
}
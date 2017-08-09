var express = require('express');

var expressConfig = require('./app/config/ExpressConfig');
var routeConfig = require('./app/config/RouteConfig');

var App = express();

expressConfig(App);
routeConfig(App);

App.listen(3000, function(error) {
  if (error) {
    throw error;
  }

  console.log('Starting server');
});
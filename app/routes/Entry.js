'use strict';

var mongoose = require('mongoose');

var Entry = mongoose.model('Entry');

exports.PostEntry = function(request, response, next) {
  console.log('Post Entry');
}

exports.GetEntries = function(request, response, next) {
  console.log('Get Entries');
}
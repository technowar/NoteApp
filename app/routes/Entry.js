'use strict';

var mongoose = require('mongoose');

var Entry = mongoose.model('Entry');

exports.PostEntry = function(request, response, next) {
  var entry = new Entry({
    entry: request.body.entry
  });

  entry.save(function(error, data) {
    if (error) {
      return response.status(500).send({
        message: 'Internal Server Error'
      });
    }

    response.status(201).send(data);
  });
}

exports.GetEntries = function(request, response, next) {
  console.log('Get Entries');
}
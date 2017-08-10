'use strict';

var mongoose = require('mongoose');

var Entry = mongoose.model('Entry');

exports.PostEntry = function(request, response, next) {
  var entry = new Entry({
    entry: request.body.entry
  });

  entry.save(function(error, data) {
    if (error) {
      return response.status(400).send({
        message: error._message
      });
    }

    response.status(201).send(data);
  });
}

exports.GetEntries = function(request, response, next) {
  Entry.find({
    isDeleted: false
  }, function(error, data) {
    if (error) {
      return response.status(400).send({
        message: error._message
      });
    }

    response.status(200).send(data);
  });
}
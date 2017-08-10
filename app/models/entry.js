'use strict';

var mongoose = require('mongoose');

var EntrySchema = new mongoose.Schema({
  entry: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  modifiedAt: {
    type: Date,
    default: Date.now
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

mongoose.model('Entry', EntrySchema);
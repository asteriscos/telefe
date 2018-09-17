'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var searchSchema = new Schema({
  word: {
    type: String,
    required: ''
  },
  created: {
    type: Date,
    default: Date.now
  },
  found:{
    type: Boolean,
    default: false
  },
  coordinates: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('searches', searchSchema);

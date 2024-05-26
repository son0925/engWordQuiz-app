const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
  word: {
    type: String,
    required: true
  },
  mean: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  }
})

const wordModel = mongoose.model('Word', wordSchema);

module.exports = wordModel
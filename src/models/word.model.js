const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
  eng: {
    type: String,
    required: true
  },
  kor: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  }
})


const wordModel = mongoose.model('Word', wordSchema);

module.exports = wordModel;
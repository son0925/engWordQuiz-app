const mongoose = require('mongoose');


const wordSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  words: [
    {
      word: {
        type: String,
        required: true
      },
      mean: {
        type: String,
        required: true
      }
    }
  ]
})



const Word = mongoose.model('word', wordSchema);

module.exports = Word;
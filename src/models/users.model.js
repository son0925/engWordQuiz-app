const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  grade: {
    type: Number,
    default: 0
  }
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
  grade: {
    type: Number,
    default: 0
  }
})



const User = mongoose.model('User', userSchema);


module.exports = User
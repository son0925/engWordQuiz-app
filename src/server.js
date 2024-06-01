const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const userModel = require('./models/users.model');
const { signupUser } = require('./utils/users');
const passport = require('passport');
require('dotenv').config();



app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('DB Connected'))
  .catch((err) => console.error(err))


app.post('/signup', signupUser);
app.post('/login', (req,res) => {
  console.log(req.body);
  res.status(200).json({msg: '로그인을 성공하셨습니다'})
})








const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Listenner on ${port}`)
})
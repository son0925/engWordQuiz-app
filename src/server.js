const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const userModel = require('./models/users.model');
const { signupUser, signInUser } = require('./utils/users');
const passport = require('passport');
const session = require('express-session');
require('dotenv').config();


app.use(session({
  resave: false,
  secret: process.env.COOKIE_SECRET,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false
  }
}))
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
// passport 미들웨어
app.use(passport.initialize()); // passport 기본 설정으로 초기화하고 메서드 추가
app.use(passport.session());    // 세션을 사용하여 인증 정보 저장


mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('DB Connected'))
  .catch((err) => console.error(err))


app.post('/signup', signupUser);
app.post('/login', signInUser)








const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Listenner on ${port}`)
})
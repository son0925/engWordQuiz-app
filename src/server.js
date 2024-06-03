// 서버 모듈
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const signRouter = require('../routes/sign.router');
const passport = require('passport');
const session = require('express-session')
require('dotenv').config();




app.use(
  session({
      secret: "secret key",
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 86400000 },
  })
);
// 서버 미들웨어
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, '../public')))
app.use(passport.initialize());
app.use(passport.session());



// Mongo DB Connect
mongoose.connect(process.env.MONGO_URL)
  .then(() => {console.log('Mongo DB Connected')})
  .catch((err) => {console.log(err)})


// 서버 라우터
app.use('/sign', signRouter);






// 서버 리스너
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Listenner on ${port}`);
})
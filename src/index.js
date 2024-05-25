// 서버 필요한 모듈 호출
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const addWordRouter = require('./routes/addWord.router');
require('dotenv').config();


// 몽고 DB 연결하기
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Mongo DB Connected'))
  .catch((err) => {
    console.log(err);
  })


// 서버 미들웨어
app.use(express.json());



// 서버 라우터
app.use('/addWord', addWordRouter);



const port = 4000;
app.listen(port, () => {
  console.log(`Listen to on ${port}`);
})
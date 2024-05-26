const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const wordModel = require('./models/words.model');
require('dotenv').config();


app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URL)
  .then(() => {console.log('MongoDB Connected')})
  .catch((err) => {console.log(err)});


app.post('/addWord', async(req,res,next) => {
  const { word, mean } = req.body;

  if (!word || !mean) {
    return res.status(400).send({ msg: '단어 혹은 뜻이 입력되어있지 않습니다' });
  }

  try {
    const result = await wordModel.findOne({ word: word });
    if (result) {
      console.log('단어가 이미 존재함');
      return res.status(409).send({ msg: '이미 존재하는 단어입니다' });
    }
    const saveWord = new wordModel({ word, mean });
    await saveWord.save();
    console.log('저장 완료');
    return res.status(201).send({ msg: '단어를 저장했습니다' });
  } catch (error) {
    console.log(error);
    next(error);
  }
});
  


const port = 4000;
app.listen(port, () => {
  console.log('서버 오픈')
})
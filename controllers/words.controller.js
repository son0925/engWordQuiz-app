const Word = require("../models/word.model");


async function wordAdd(req, res) {
  try {
    const username = req.user;
    const word = req.body.word;
    const mean = req.body.mean;
    let userWord = await Word.findOne({username});
    if (!userWord) {
      userWord = new Word({username, words: {word,mean}});
    }
    else {
      userWord.words.push({word,mean});
    }
    
    await userWord.save();
    res.cookie('msg', '단어 저장 성공');
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send("서버 에러 발생");
  }
}

async function wordFind(req,res) {
  const username = req.user;
  const findWord = req.body.word;
  const user = await Word.findOne(username)
  console.log(user)
}

async function wordEdit() {

}

module.exports = {
  wordAdd,
  wordFind,
  wordEdit
}

const Word = require("../models/word.model");

async function wordAdd(req, res) {
  try {
    const userId = req.user;
    const word = req.body.word;
    const mean = req.body.mean;
    const wordPost = new Word({userId, word, mean})
    if (!word || !mean) {
      return res.send('전부다 입력해주세요')
    }
    await wordPost.save();
    res.send(wordPost);
  } catch (error) {
    console.error(error);
    res.status(500).send("서버 에러 발생");
  }
}

module.exports = {
  wordAdd
}

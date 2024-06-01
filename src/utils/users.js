const userModel = require("../models/users.model");

// 회원가입
async function signupUser(req,res) {
  const { username, password } = req.body;
  const user = new userModel({username, password})

  // db에 해당 유저이름이 있는지
  const findUser = await userModel.findOne({username: username})
  if (findUser) {
    return res.json({msg: '이미 존재하는 유저 이름입니다'})
  }

  try {
    await user.save()
    return res.json({msg: '회원가입이 완료되었습니다!!'})
  } catch (error) {
    return res.json({msg: '회원가입에 실패했습니다'})
  }
}






module.exports = {
  signupUser
}
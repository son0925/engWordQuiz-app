const userModel = require("../models/users.model");
const bcrypt = require('bcrypt');
const passport = require('passport');
require('../utils/passport');



// 회원가입
async function signupUser(req,res) {
  const { username, password } = req.body;
  
  // db에 해당 유저이름이 있는지
  const findUser = await userModel.findOne({username: username})
  if (findUser) {
    return res.json({msg: '이미 존재하는 유저 이름입니다'})
  }

  const regexPW = /^(?=.*[A-Z])(?=.*[a-z](?=.*\d)(?=.*[!@#$%^&?])[A-Za-z\d!@#$%^&?]{7,})/;
  if (!regexPW.test(password)) {
    return res.json({msg: '비밀번호 형식에 맞지 않습니다'})
  } 

  const hashedPassword = async(password) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  }
  const finallyHashing = await hashedPassword(password)
  const user = new userModel({
    username: username,
    password: finallyHashing
  })
  console.log(user)

  // db에 유저 정보 저장
  try {
    await user.save()
    return res.json({msg: '회원가입이 완료되었습니다!!'})
  } catch (error) {
    console.log(error)
    return res.json({msg: '회원가입에 실패했습니다'})
  }
}

async function signInUser(req,res,next) {
  passport.authenticate('local', (err, user, msg) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(msg);
    }
    return req.login(user, (error) => {
      if (error) {
        console.log(error);
        return next(error);
      }
      return res.status(200).json(msg)
    })
  })(req,res,next)
}






module.exports = {
  signupUser,
  signInUser
}
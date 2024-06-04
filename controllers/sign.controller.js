const path = require('path');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const passport = require('passport');
require('../src/utils/passport')



function getSignInPage(req,res) {
  res.sendFile(path.join(__dirname, '../public/html/signin.html'))
}


function getSignUpPage(req,res) {
  res.sendFile(path.join(__dirname, '../public/html/signup.html'))
}

// 로그인
function signInUser(req,res,next) {
  passport.authenticate('local', (err, user, msg) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return next(msg);
    }

    // 에러가 없고 유저의 정보가 있다면 로그인
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/')
    })

  })(req,res,next)
}

// 회원가입
async function signUpUser(req,res) {
  const { username, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.json({msg: '비밀번호가 같지 않습니다 다시 확인해주세요'})
  }

  const hashingPassword = async(pw) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(pw, salt);
  }
  const hashedPassword = await hashingPassword(password);
  const user = new User({
    username: username,
    password: hashedPassword
  })
  await user.save();
  return res.json({msg: '회원가입 성공!!'})
}

function logout(req,res,next) {
  req.logOut(err => {
    if (err) {
      return next(err);
    }
    else {
      res.redirect('/')
    }
  })
}


function isLoggedIn(req,res,next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/sign/in');
}

function isNotLogged(req,res,next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}








module.exports = {
  getSignInPage,
  getSignUpPage,
  signInUser,
  signUpUser,
  logout,
  isLoggedIn,
  isNotLogged
}
const passport = require('passport');
const User = require('../../models/user.model');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');



passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, async(username, password, done) => {
  try {
    // 유저 찾기
    const exUser = await User.findOne({username});
    if (!exUser) {
      return done(null, false, {msg: '사용자를 찾을 수 없습니다'})
    }
    // 비밀번호 체크하기
    const result = await bcrypt.compare(password, exUser.password);
    if (!result) {
      return done(null, false, {msg: '비밀번호가 맞지 않습니다'})
    }
    return done(null, exUser);
  } catch (error) {
    return done(error)
  }
}))

passport.serializeUser((user,done) => {
  return done(null, user.username);
})

passport.deserializeUser((username, done) => {
  return done(null, username);
})




module.exports = passport;
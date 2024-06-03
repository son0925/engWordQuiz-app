const passport = require('passport');
const User = require('../../models/user.model');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');



passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, async(username, password, done) => {
  try {
    const exUser = await User.findOne({username});
    if (!exUser) {
      return done(null, false, {msg: '해당 유저의 정보가 없습니다'})
    }
    const result = await bcrypt.compare(password, exUser.password);
    if (!result) {
      return done(null, false, {msg: '비밀번호가 틀립니다'})
    }
    return done(null, exUser)
  } catch (error) {
    return done(error)
  }
}))





module.exports = passport;
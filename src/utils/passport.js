const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../models/users.model');
const bcrypt = require('bcrypt');

// LocalStrategy 설정
passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, async (username, password, done) => {
  try {
    const exUser = await userModel.findOne({ username });
    if (!exUser) {
      return done(null, false, { msg: '해당 아이디는 존재하지 않습니다' });
    }
    const result = await bcrypt.compare(password, exUser.password);
    if (result) {
      return done(null, exUser, {msg: '로그인 성공했습니다'});
    } else {
      return done(null, false, { msg: '비밀번호가 일치하지 않습니다' });
    }
  } catch (error) {
    return done(error);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userModel.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;

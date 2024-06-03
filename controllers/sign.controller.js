const path = require('path');
function getSignInPage(req,res) {
  res.sendFile(path.join(__dirname, '../views/signin.html'))
}


function getSignUpPage(req,res) {
  res.sendFile(path.join(__dirname, '../views/signup.html'))
}

function signInUser(req,res) {
  res.send('hi')
}

function signUpUser(req,res) {
  res.send('hi')
}







module.exports = {
  getSignInPage,
  getSignUpPage,
  signInUser,
  signUpUser
}
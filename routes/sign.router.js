const express = require('express');
const { getSignInPage, getSignUpPage, signInUser, signUpUser, logout } = require('../controllers/sign.controller');
const signRouter = express.Router();



signRouter.get('/in', getSignInPage);
signRouter.get('/up', getSignUpPage);
signRouter.get('/logout', logout);
signRouter.post('/in', signInUser);
signRouter.post('/up', signUpUser);






module.exports = signRouter;
const express = require('express');
const { getSignInPage, getSignUpPage, signInUser, signUpUser } = require('../controllers/sign.controller');
const signRouter = express.Router();



signRouter.get('/in', getSignInPage);
signRouter.get('/up', getSignUpPage);
signRouter.post('/in', signInUser);
signRouter.post('/up', signUpUser);






module.exports = signRouter;
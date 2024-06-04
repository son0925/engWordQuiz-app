const express = require('express');
const { wordAdd } = require('../controllers/words.controller');
const wordsRouter = express.Router();




wordsRouter.post('/add',wordAdd);







module.exports = wordsRouter;
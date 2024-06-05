const express = require('express');
const { wordAdd, wordFind, wordEdit } = require('../controllers/words.controller');
const wordsRouter = express.Router();




wordsRouter.post('/add',wordAdd);
wordsRouter.post('/find', wordFind);
wordsRouter.post('/edit', wordEdit);







module.exports = wordsRouter;
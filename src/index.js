const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URL)
  .then(() => {console.log('MongoDB Connected')})
  .catch((err) => {console.log(err)});




const port = 4000;
app.listen(port, () => {
  console.log('서버 오픈')
})
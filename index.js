const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./MongoDB.js');
var bookController = require('./src/app/controllers/bookController.js');

var app = express ();
app.use(bodyParser.json());

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/books', bookController);

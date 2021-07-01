const express = require('express');
const { model } = require('mongoose');
const Book = require('../models/book');
var router = express.Router();

var { Book } = require('../models/book');

// => localhost:3000/books/
router.get('/', (req, res) => {
  Book.find((err, docs) => {
    if(!err) { res.send(docs); }
    else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.post('/', (req, res) => {
  var book = new Book({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    photo: req.body.photo,
  });
  book.save((err, doc) => {})
});

module.exports = router;

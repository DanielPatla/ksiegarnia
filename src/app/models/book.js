const mongoose = require('mongoose');

var Book = mongoose.model('Book', {
  title: { type: String },
  author: { type: String },
  office: { type: String },
  salary: { type: Number }
});

module.exports = { Book };

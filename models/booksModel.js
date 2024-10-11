const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: String,
    trim: true
  },
  publishedYear: {
    type: Number
  },
  isbn: {
    type: String,
    unique: true,
    required: true
  },
  copiesAvailable: {
    type: Number,
    required: true,
    default: 1
  }
}, {
  timestamps: true
});

const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;

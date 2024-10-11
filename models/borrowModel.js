const mongoose = require('mongoose');

const borrowRecordSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  borrowDate: {
    type: Date,
    default: Date.now
  },
  returnDate: {
    type: Date
  },
  status: {
    type: String,
    enum: ['borrowed', 'returned'],
    default: 'borrowed'
  }
}, {
  timestamps: true
});

const borrowModel= mongoose.model('BorrowRecord', borrowRecordSchema);

module.exports = borrowModel;
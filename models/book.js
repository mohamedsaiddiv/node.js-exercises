// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String
// });

// module.exports = mongoose.model('User', userSchema);

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

  publishedYear: {
    type: Number
  },

  genre: {
    type: String,
    trim: true
  }
} 
);

module.exports = mongoose.model('Book', bookSchema);

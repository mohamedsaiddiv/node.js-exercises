
const express = require('express');
const router = express.Router();

const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
} = require('../controllers/booksController');


router.post('/', createBook);


router.get('/', getBooks);

router.get('/:id', getBookById);

router.put('/:id', updateBook);


router.delete('/:id', deleteBook);

module.exports = router;

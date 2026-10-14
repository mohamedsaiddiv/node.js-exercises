
const Book = require('../models/Book');

// CREATE: Add a new book
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);

    res.status(201).json({
      message: 'Book created successfully',
      book
    });
  } catch (error) {
    res.status(400).json({
      message: 'Failed to create book',
      error: error.message
    });
  }
};

// READ: Get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch books',
      error: error.message
    });
  }
};

// READ: Get one book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: 'Book not found'
      });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({
      message: 'Invalid book ID',
      error: error.message
    });
  }
};

// UPDATE: Update a book by ID
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!book) {
      return res.status(404).json({
        message: 'Book not found'
      });
    }

    res.status(200).json({
      message: 'Book updated successfully',
      book
    });
  } catch (error) {
    res.status(400).json({
      message: 'Failed to update book',
      error: error.message
    });
  }
};

// DELETE: Delete a book by ID
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(
      req.params.id
    );

    if (!book) {
      return res.status(404).json({
        message: 'Book not found'
      });
    }

    res.status(200).json({
      message: 'Book deleted successfully',
      book
    });
  } catch (error) {
    res.status(400).json({
      message: 'Invalid book ID',
      error: error.message
    });
  }
};

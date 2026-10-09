
const express = require('express'); 
const app = express();
const PORT = 3000;

app.use(express.json()); 

let books = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear' },
  { id: 2, title: 'Deep Work', author: 'Cal Newport' }
];


app.get('/books', (req, res) => {
  res.json(books);
});


app.post('/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});


app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);

  if (!book) return res.status(404).send('Book not found');

  res.json(book);
});


app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);

  if (!book) return res.status(404).send('Book not found');

  book.title = req.body.title;
  book.author = req.body.author;

  res.json(book);
});


app.delete('/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);

  if (!book) return res.status(404).send('Book not found');

  books = books.filter(b => b.id != req.params.id);

  res.json({ message: 'Book deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

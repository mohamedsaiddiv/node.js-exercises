
require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

const mongoose = require('mongoose');

app.use(express.json());
app.use('/books', require('./routes/books'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected locally');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Connection error:', err);
  });

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Use the connection string from environment variables
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://bhuvanesh:bhuvanesh@cluster0.ml8jho1.mongodb.net/?retryWrites=true&w=majority';

// Set strictQuery option to avoid deprecation warning
mongoose.set('strictQuery', true);

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

app.get('/', (req, res) => {
  res.send('Hello, Heroku with MongoDB!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

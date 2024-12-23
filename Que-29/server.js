const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let books = [];


fs.readFile('books.json', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error reading books.json:', err);
    } else {
        books = JSON.parse(data);
    }
});


app.get('/books', (req, res) => {
    res.json(books);
});


app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        year: req.body.year
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

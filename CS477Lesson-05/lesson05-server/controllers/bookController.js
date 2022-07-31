/* eslint-disable*/

const book = require('../models/book');

exports.getAll = (req, res, next) => {
    res.json(book .getAll());
};

exports.getById = (req, res, next) => {
    res.json(book .getById(req.params.id));
}
//id, title, isbn, publishedDate, author
exports.save = (req, res, next) => {
    let addbook = new book(null, req.body.title, req.body.isbn, req.body.publishedDate,req.body.author).save();
    res.json(addbook);
}

exports.update = (req, res) => {
    let updateBook = book.update(req.params.id, req.body.title, req.body.isbn, req.body.publishedDate,req.body.author);
    res.json(updateBook);
}

exports.update2 = (req, res) => {
    let updatedBook =  new Book(req.params.id, req.body.title, req.body.isbn, req.body.publishedDate,req.body.author).update2();
    res.json(updatedProd);
}

exports.deleteById = (req, res) => {
    res.json(book.deleteById(req.params.id));
}
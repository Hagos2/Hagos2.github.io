/* eslint-disable*/
//const Book = require('../models/book');
const book = require('../models/book');

exports.getAll = async(req, res, next) => {
    res.json( await book .getAll());
};

exports.getById = async(req, res, next) => {
    res.json( await book .getById(req.params.id));
}
//id, title, isbn, publishedDate, author
exports.save = async(req, res, next) => {
    let addbook = new book(null, req.body.title, req.body.isbn, req.body.publishedDate,req.body.author);
    const result = await addbook.save()
    addbook._id = result.insertedId;
    res.json(addbook);
    res.json(addbook);
}

exports.update = async (req, res) => {
    let updateb = new Book(req.params.id, eq.body.title, req.body.isbn, req.body.publishedDate,req.body.author);
    await updateb.update();
    res.json(updateb);
}


exports.deleteById = async (req, res) => {
    await book.deleteById(req.params.id)
    res.json({_id: req.params.id});
}
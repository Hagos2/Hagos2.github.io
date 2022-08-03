const book = require('../models/book');
const {ObjectId} = require('mongodb');

exports.getAll = async (req, res, next) => {
    if(req.query.isbn) {
        res.json(await Product.filterByIsbn(req.query.isbn));
    } else {
        res.json(await book.find());
    }
   
};

exports.getById = async (req, res, next) => { 
    res.json(await book.findById(req.params.id));
}

exports.save = async (req, res, next) => {
    try{
        const result = await new book(req.body).save(); //instance methods
        res.json(result);
    } catch(error) {
       next(error);
    } 
}

exports.update = async (req, res) => {
    const result = await book.updateOne({_id: new ObjectId(req.params.id)} , req.body);
    res.json(result);
}


exports.deleteById = async (req, res) => {
    await book.findByIdAndDelete(req.params.id);
    res.json({_id: req.params.id});
}
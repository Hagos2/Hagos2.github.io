const Book = require('../models/books');
const {ObjectId} = require('mongodb');

exports.getAll = async(req, res,next) =>{
   res.json(await Book.find());
};

exports.getByID = async (req, res, next)=>{
   res.json(await Book.findById(req.params.id));  
}

exports.save = async (req, res, next) => {
   try {
      const result = await new Book(req.body).save();
      res.json(result);
   } catch (error) {
      next(err.message);
   }
  
}

exports.update = async (req, res, next)=>{
  const result = await  Book.updateOne({_id: new ObjectId(req.params.id)}, req.body);
    res.json(result);
}
exports.deleteByID = async (req, res, next) =>{
    const result = await Book.findByIdAndDelete(req.params.id);
    res.json(result);
}
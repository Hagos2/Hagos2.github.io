const mongoose = require('mongoose');

const {Schema} = require('mongoose');

const mySchema = new Schema({
  title:{type: String, required: true} ,
  ISBN: Number,
  publishedDate: Date ,
  author: String
}, {
  versionKey: 'book'
});

const Model = mongoose.model('Book', mySchema);

module.exports = Model;
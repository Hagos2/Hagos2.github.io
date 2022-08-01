/* eslint-disable*/
let books = [
    {id: 1, title: 'design Database', isbn: 65473,publishedDate:1987, author: 'abebe'},
    {id: 2, title: 'introduction Algorithm', isbn:24356 ,publishedDate:1997, author: 'kebed'},
    {id: 3, title: 'server side book', isbn:35342 ,publishedDate:1989, author: 'gere'},
    {id: 4, title: 'OOP', isbn: 12345 ,publishedDate:1988, author: 'jhon'}
];
let counter = 4;
const { getDB } = require('../mongodbutil/database');
const { ObjectId } = require('mongodb');

module.exports = class Book {

    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAll() {
        return getDB().collection('books').find().toArray();
    }

    static getById(id) {
        return getDB().collection('books').findOne({ _id: new ObjectId(id) });
    }

    save() {
        return getDB().collection('books').insertOne(this);
    }

    update() {
        // return getDB().collection('books')
        //     .updateOne({_id: new ObjectId(this._id)}, 
        //         {$set: {title: this.title, isbn:this.isbn, publishedDate: this.publishedDate,author:this.author}});
        const self = Object.assign({}, this);
        delete self._id;

        return getDB().collection('books')
            .updateOne({ _id: new ObjectId(this._id) }, { $set: self });
    }

    static deleteById(id) {
        return getDB().collection('books').deleteOne({ _id: new ObjectId(id) });
    }
}
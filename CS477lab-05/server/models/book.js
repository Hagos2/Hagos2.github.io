
/* eslint-disable*/
let Books = [
    {id: 1, title: 'design Database', isbn: 65473, author: 'abebe'},
    {id: 2, title: 'introduction Algorithm', isbn:24356 , author: 'kebed'},
    {id: 3, title: 'server side book', isbn:35342 , author: 'gere'},
    {id: 4, title: 'OOP', isbn: 12345 , author: 'jhon'}
];


module.exports = class Book {

    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save() {
        this.id = Math.random().toString();
        books.push(this);
        return this;
    }

    update() {
        const index = books.findIndex(p => p.id === this.id);
        if (index > -1) {
            books.splice(index, 1, this);
            return this;
        } else {
            throw new Error('NOT Found');
        }

    }

    static fetchAll() {
        return books;
    }

    static findById(bookId) {
        const index = books.findIndex(p => p.id === bookId);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error('NOT Found');
        }
    }

    static deleteById(bookId) {
        const index = books.findIndex(p => p.id === bookId);
        if (index > -1) {
            books = books.filter(p => p.id !== bookId);
        } else {
            throw new Error('NOT Found');
        }
    }

}
/* eslint-disable*/
let books = [
    {id: 1, title: 'design Database', isbn: 65473,publishedDate:1987, author: 'abebe'},
    {id: 2, title: 'introduction Algorithm', isbn:24356 ,publishedDate:1997, author: 'kebed'},
    {id: 3, title: 'server side book', isbn:35342 ,publishedDate:1989, author: 'gere'},
    {id: 4, title: 'OOP', isbn: 12345 ,publishedDate:1988, author: 'jhon'}
];
let counter = 4;

module.exports = class Book {

    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save() {
        this.id = counter++;
        books.push(this);
        return this;
    }

    update() {
        const index = books.findIndex(b => b.id === this.id);
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
        const index = books.findIndex(b => b.id === bookId);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error('NOT Found');
        }
    }

    static deleteById(bookId) {
        const index = books.findIndex(b=> b.id === bookId);
        if (index > -1) {
            books = books.filter(b => b.id !== bookId);
        } else {
            throw new Error('NOT Found');
        }
    }

}
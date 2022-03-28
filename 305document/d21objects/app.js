"use strict";
//You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = {showTitles, addBook, findTitles, findAuthors, findIDs }; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
     //implement this and other functions
     for(let i=0;i<library[i].length;i++){
         titles[i]=library[i].title;
    }
     return titles;
}
 /**
  * 
  * @param {Strin} title  name of book
  * @param {String} author bbb
  * @param {number} libraryID  is the id number
  * @returns {Array}return all the property in side array
  */
function addBook(title,author,libraryID){
    title = document.getElementById("title"); //retrieves the book title from the title textbox
    //finish the implementation -- get the author, create a book object, and add to the library array
    author=document.getElementById("author");
    let book={};
    book.title=title;
    book.author=author;
    book.libraryID=libraryID;
    return book;

}
/**
 * Event handler to display library Authors sorted alphabetically
 * @returns {undefined}
 */
function showAuthors() {

    /* put all author into an array, then sort, then join with newline and insert in textarea innerHTML */

    const authors = findAuthors();

    /*need to sort and then join the author still (e.g., someArray.join("\n")  */
    authors.sort();
    const authorsString = authors.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorsString;
}
/**
 * 
 * @returns{String} return authores
 */
function findAuthors() {
    let authors = [];
    authors=["Suzanne Collins"];
    for (let i = 0; i < library.length; i++) {
      authors[i] = library[i].author;
    }
    return authors;
  }
  
/**
 * Event handler to display library ids sorted alphabetically
 * @returns {undefined}
 */
  function showIDs() {

    /* put all ids into an array, then sort, then join with newline and insert in textarea innerHTML */

    const ids = findIDs();

    /*need to sort and then join the author still (e.g., someArray.join("\n")  */
    ids.sort();
    const idsString = ids.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = idsString;
}

  /**
   * 
   * @returns {number}return the id
   */
  function findIDs() {
    let ids = [];
    ids=["3245"];
    for (let i = 0; i < library.length; i++) {
      ids[i] = library[i].libraryID;
    }
    return ids;
}
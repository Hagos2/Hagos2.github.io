/* eslint-disable*/
window.onload = function(){
    fetchbooks();
}

function fetchbooks(){
    fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(books => displaybooks(books))
        .catch(err => {
            console.log('inside err');
        })
}

function displaybooks(books){
    const tbody = document.getElementById('books-table');
    let html = '';
    books.forEach(bok => {
        html += `
            <tr>
                <th>${bok.id}</th>
                <td>${bok.title}</td>
                <td>${bok.isbn}</td>
                <td>${bok.publishedDate}</td>
                <td>${bok.author}</td>
                <td><a>DELETE</a> <a>EDIT</a></td>
            </tr>
        `
    });

    tbody.innerHTML = html;
}
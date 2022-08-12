window.onload = function (){
   fetchBooks();
}

 function fetchBooks(){
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => displayBook(books))
    .catch(err => console.log(err))
}

function displayBook(books){
    let  tbody = document.getElementById('tbody');
        let html = '';
        books.forEach(book => {
           html+= ` <tr id="tr${book._id}">
           <th scope="row">${book._id}</th>
           <td>${book.title}</td>
           <td>${book.ISBN}</td>
           <td>${book.publishedDate}</td>
           <td>${book.author}</td>
           <td><button class="btn btn-primary" onclick="deleteBook(${book._id})">DELETE</button>  <button  class="btn btn-primary" onclick ="editBook(${book.id})">EDIT</button></td>
           
         </tr>`
        
        })
        tbody.innerHTML = html
}

async function deleteBook(id){
   console.log(id)
   const response = await fetch('http://localhost:3000/books/'+ id, {
       method: "DELETE"
   });
   const data = await response.json();
   // location.reload(); // not good, unnecessary request
   document.getElementById(`tr${id}`).remove();
   console.log(data);
   
}

function editBook(id){
   window.location = 'edit-book.html?id='+ id;
}



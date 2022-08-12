window.onload = function (){
    let url = new URL(location.href);
    const bookid = url.searchParams.get('id');
    fetchBookById(bookid);
    console.log(document.getElementById("edit-button"))
    document.getElementById("edit-button").onclick = (event) =>{
        event.preventDefault()
        editBookById(bookid);
    }
}

function fetchBookById(id){
   fetch('http://localhost:3000/books/'+ id)
      .then(res => res.json())
      .then(book => {
        console.log(book)
        document.getElementById('title').value = book.title;
        document.getElementById('ISBN').value = book.ISBN;
        document.getElementById('publishedDate').value = book.publishedDate;
        document.getElementById('author').value = book.author;

      })
}

async function editBookById(id){
     console.log("....in edit")
   const response = await fetch('http://localhost:3000/books/'+ id, {
    method: 'PUT',
    body:JSON.stringify({
        title: document.getElementById('title').value,
        ISBN: document.getElementById('ISBN').value,
        publishedDate: document.getElementById('publishedDate').value,
        author: document.getElementById('author').value
    }),
    headers: {
        'Content-Type': 'application/json'
    }
   })
   if(response.ok){
    window.location = 'index.html'
   }
}
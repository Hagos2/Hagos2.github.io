
window.onload = function(){
  document.getElementById('add-button').onclick = addBook;

}

async function addBook(event){
    event.preventDefault();
    const  titleinput = document.getElementById('title');
    const  ISBNinput = document.getElementById('ISBN');
    const  publishedDateinput = document.getElementById('publishedDate');
    const  authorinput = document.getElementById('author');
    const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        body: JSON.stringify({
             title: titleinput.value,
             ISBN: ISBNinput.value,
             publishedDate: publishedDateinput.value,
             author: authorinput.value
        }),
        headers: {
            'content-type': 'application/json'
        }
    
     });
     const data = await response.json();
     document.getElementById("book-form").reset()
     console.log(window.location);
     window.location = 'index.html';
    }

 
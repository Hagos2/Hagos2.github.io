
window.onload = function(){
    document.getElementById('add-button').onclick = addbook;
}

async function addbook(event){
    event.preventDefault();
    const titleInput = document.getElementById('title');
    const isbnInput = document.getElementById('myisbn');
    const publishedDateInput = document.getElementById('publisheddate');
    const authorInput = document.getElementById('author');
    const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        body: JSON.stringify({
            title: titleInput.value,
            isbn  : isbnInput.value,
            publishedDate: publishedDateInput.value,
                   author:authorInput
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });
    const data = await response.json();
    document.getElementById('book-add-form').reset();
    console.log(data);
    window.location = 'indexB.html';
}
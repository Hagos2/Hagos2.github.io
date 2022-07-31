
/* eslint-disable*/

window.onload = function(){
    document.getElementById('add-button').onclick = addProduct;
}

async function addProduct(event){
    event.preventDefault();
    const titleInput = document.getElementById('title');
    const priceInput = document.getElementById('myprice');
    const descriptionInput = document.getElementById('description');
    const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        body: JSON.stringify({
            title: titleInput.value,
            price: priceInput.value,
            description: descriptionInput.value
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });
    const data = await response.json();
    document.getElementById('product-add-form').reset();
    console.log(data);
    window.location = 'index.html';
}
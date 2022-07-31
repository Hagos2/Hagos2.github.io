
/* eslint-disable*/
window.onload = function(){
    fetchProducts();
    deletProduct(products);
}

function fetchProducts(){
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(products => displayProducts(products))
        .catch(err => {
            console.log('inside err');
        })
}

function displayProducts(products){
    const tbody = document.getElementById('products-table');
    let html = '';
    products.forEach(prod => {
        html += `
            <tr>
                <th>${prod.id}</th>
                <td>${prod.title}</td>
                <td>${prod.price}</td>
                <td>${prod.description}</td>
                <td><a>DELETE</a> <a>EDIT</a></td>
            </tr>
        `
    });

    tbody.innerHTML = html;
}

function deletProduct(id){
console.log(id);
fetch("http://localhost:3000/products/"+id,{
   method:'DELETE' 
}).then
}
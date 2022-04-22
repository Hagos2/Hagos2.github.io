"use strict";
/*eslint-disable*/


const urlParams = new URLSearchParams(window.location.search);

const names = urlParams.get('name');
const price = urlParams.get('price');
const image = urlParams.get('image');
const rating = urlParams.get('rating');
const id = urlParams.get('id');


let container = document.getElementsByClassName("container")[0];
container.innerHTML = ` <div class="p-2 w-25">
<img src="images/${image}"> 
</div>
<div class="p-2 w-50">
<div class="fs-4 fw-bold">${names}</div>
<div class="p-4">
    <span class='fa fa-star checked'></span>
    <span class='fa fa-star checked'></span>
    <span class='fa fa-star checked'></span>
    <span class='fa fa-star checked'></span>
    <span class='fa fa-star checked'></span> - ${rating}
</div>
<div class="p-4">Price:<span class="fs-3 text-danger">$${price}</span></div>
<div><p>Available at a lower price from other sellers that may not offer free Prime shipping.</p></div>
<div>
    <h5 class="mt-5 fw-bold">Description:</h5>
    <ul>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sint atque magnam adipisci asperiores? Incidunt ipsum, quidem alias blanditiis voluptates doloremque consequuntur itaque unde similique quisquam aperiam repellendus repudiandae laborum.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sint atque magnam adipisci asperiores? Incidunt ipsum, quidem alias blanditiis voluptates doloremque consequuntur itaque unde similique quisquam aperiam repellendus repudiandae laborum.</li>

        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sint atque magnam adipisci asperiores? Incidunt ipsum, quidem alias blanditiis voluptates doloremque consequuntur itaque unde similique quisquam aperiam repellendus repudiandae laborum.</li>
    </ul>
</div>

</div>
<div class="p-4 w-25">
<div class="border rounded p-2"  style="width: 90%; background-color:#e7eaef30;">
    <div class="">Price:<span class="fs-4 text-danger">$${price}</span></div>
    <div class="text-danger p-2"><p>This item cannot be shipped to your selected delivery location. Please choose a different  delivery location</p></div>
    <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      </svg><span class="text-primary">deliver to India </span></div>
      <button class="btn btn-warning mt-4 w-100 rounded-pill" type="button">Add to Cart</button>
</div>

</div>`;




let btn = document.getElementsByClassName("btn")[0];
btn.onclick = addtocart;

function addtocart(){
    window.location.href = "shoppingCart.html" + window.location.search
}

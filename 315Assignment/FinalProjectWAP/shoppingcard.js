"use strict";
/*eslint-disable*/

const urlParams = new URLSearchParams(window.location.search);

const names = urlParams.get('name');
const price = Number(urlParams.get('price'));
const id = Number(urlParams.get('id'));
const image = urlParams.get('image');
let totalPrice;
// let shoppingcardArr = [{name: 'Arducam 4K USB Camera Bundle, 12MP IMX477 HQ Webca…Mount Lens, Metal Enclosure, Tripod and USB Cable', price: 194, image: 'camera.jpg'}, 
// {name: 'Active noise cancellation for immersive sound Tran…soft,tapered silicone tips for a customizable fit', price: 203, image: 'airpord.jpg'}];

let shoppingcardArr= JSON.parse(localStorage.getItem("cart"));

function addtocardfunc(){
    if(names){
    shoppingcardArr.push({name: names, price: price, image: image});
    localStorage.setItem("cart",JSON.stringify(shoppingcardArr));
    totalPrice = shoppingcardArr.reduce((sum, current)=>sum + current.price,0);
}
}
addtocardfunc();

window.onload = function(){
    displayProduct(shoppingcardArr);
}
  
let cardpage = document.getElementById("items");
let subtotal = document.getElementById("subtotal")

function displayProduct(arr){
    for(let element of arr){
        
cardpage.innerHTML+=`<div class="row m-3">
<div class="col-12 ">
    <div class="row border-bottom pb-4">
        <div class="col-2">
                <img src="images/${element.image}" >
            </div>
            <div class="col-8 ">
                <h6 class="fw-bold"> ${element.name}</h6>
                
                <span class=" text-success tsize">In stock</span>
                <div class="tsize">Eligible for FREE Shipping & FREE Returns</div>
            
                <input type="checkbox" id="checkbox">
                <label for="checkbox" class="tsize">This is a gift Learn more</label>
            <div class="tsize mb-3 mt-3"><span class="fw-bold ">color:</span> black</div> 

            <select>
                <option>Qty: 1</option>
                <option>Qty: 2</option>
                <option>Qty: 3</option>
                <option>Qty: 4</option>
                <option>Qty: 5</option>
                <option>Qty: 6</option>
                <option>Qty: 7</option>
                <option>Qty: 8</option>
            </select>
            <a href="#" class="text-primary p-4 tsize " id="delete">delete </a> |
            <a href="#" class="text-primary p-4 tsize">Save for later</a> | 
            <a href="#" class="text-primary p-4 tsize">Compare with similar items</a> 
            
            </div> 
            <div class="col-2 ">
                <div class="fw-bold fs-5">$${element.price}</div>
                save 20%
            clip Coupon
            </div>
    </div> 
    
</div>
</div>`
 }
  
 subtotal.innerHTML+=`<div style="width:300px">
 <div class="p-4">
     <div class="border rounded p-2"  style="width: 110%; background-color:#e7eaef;">
         <div class="tsize p-2 text-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
             <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
           </svg>&nbsp&nbspyour order qualifies for FREE Shipping
           <span class="text-secondary">Choose this otion at checkout. See details</span></div>
         
         <div class=""><span class=" text-dark fs-6">Subtotal (${shoppingcardArr.length} Items): </span><span class="fw-bold text-dark fs-6">$${totalPrice}</span></div>
         <button class="btn btn-warning mt-4 w-100 rounded-pill" onclick="checkOutFun()" type="button">Proceed to checkout</button>
         
     </div>

 </div>
</div>`

}



let numberItems = document.getElementsByClassName("numberItems")[0];

numberItems.innerHTML = `<p style="color:#DB8803; font-size:20px; ">${shoppingcardArr.length}</p>`;



function checkOutFun(){
window.location.href = "thankyou.html"
localStorage.clear();

}
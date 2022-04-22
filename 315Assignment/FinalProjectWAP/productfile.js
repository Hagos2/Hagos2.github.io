"use strict";
/*eslint-disable*/

let shoppingCart = [];
if(localStorage.getItem("cart")==null){
localStorage.setItem("cart",JSON.stringify(shoppingCart));
}


let productArray =[
{name: "Active noise cancellation for immersive sound Transparency mode for hearing and connecting with the world around you Three sizes of soft,tapered silicone tips for a customizable fit",
rating: 5 , price: 203.00, image: "airpord.jpg", department: "electronics",id:876},

{name: "Offer from a Gentleman, An: Bridgerton (Bridgertons, 3) ",
rating: 3, price: 12.34, image: "book2.webp", department: "books",id:276},

{name: "Amazon Essentials Boys and Toddlers' Short-Sleeve Woven Poplin Chambray Button-Down Shirts",
rating: 3, price: 14.34, image: "clothe2.jpg", department: "clothing",id:176},

{name: "What the Wind Knows ",
rating: 5, price: 8.99, image: "book4.jpg", department: "books",id:87},

{name: "Arducam 4K USB Camera Bundle, 12MP IMX477 HQ Webcam with Audio, 6mm CS-Mount Lens, Metal Enclosure, Tripod and USB Cable",  
rating: 4, price: 194.00, image: "camera.jpg", department: "electronics",id:394},

{name: "2Bunnies Girl Vintage Lace Boho Party Princess Flower Girl Dress",  
rating: 1, price: 29.00, image: "clothe3.jpg", department: "clothing",id:823},

{name: "BLENCOT Women's Lightweight Color Block Hooded Sweaters Drawstring Hoodies Pullover Sweatshirts",  
rating: 3, price: 45.00, image: "clothe1.jpg", department: "clothing",id:123},

{name: "The Sign for Home: A Novel Kindle Edition",  
rating: 2, price: 9.00, image: "book3.jpg", department: "books",id:498},

{name: "Apple iMac 27-Inch Desktop, 3.4 GHz Intel Core i7 Processor, 16 GB memory, 1TB HDD (Renewed), Stereo speakers, Dual microphones, Headphone port. ",  
rating: 1, price: 1594.00, image: "imac.jpg", department: "electronics",id:987},

{name: "Apple iPhone 13 Pro Max (128GB, Sierra Blue) [Locked] + Carrier Subscription",  
rating: 4, price: 1099.00, image: "iphone.webp", department: "electronic",id:834},

{name: "Hood Crew Men’s Casual Stand Collar PU Faux Leather Zip-Up Motorcycle Bomber Jacket With a Removable Hood",  
rating: 1, price: 25.00, image: "clothe4.jpg", department: "clothing" ,id:582},

{name: "MOCVOO Drone with 4K Dual Camera for Adults Beginners Kids,Foldable RC",  
rating: 5, price: 159.00, image: "drone.jpg", department: "electronics",id:764},

{name: "Those Three Little Words Kindle Edition",  
rating: 4, price: 17.00, image: "book1.jpg", department: "books",id:921}
];
window.onload = function(){
  displayProduct(productArray);
}

let dept = document.getElementsByClassName("product")[0];


//============== display Products =============================
function displayProduct(arr){
    for(let element of arr){
        let newproduct= document.createElement("div");
        newproduct.className ="box2 products";

        newproduct.innerHTML =`<img src='images/${element.image}'> 
        <a href="selectproduct.html?id=${element.id}&name=${element.name}&image=${element.image}&price=${element.price}&rating=${element.rating}"><p style='font-size:13px'>${element.name}</p></a>
        <span class='fa fa-star checked'></span>
       <span class='fa fa-star checked'></span>
       <span class='fa fa-star checked'></span>
       <span class='fa fa-star checked'></span>
       <span class='fa fa-star checked'></span> - ${element.rating}
       <p style='font-weight:bold'>$ ${element.price} </p>`;
       dept.append(newproduct);
    }
}

// ========================= sorting Events =============================
let select = document.getElementsByClassName("form-select")[0];//form-select?
select.onchange = sortProd;

 function sortProd(){
   for (const option of select.options) {
     if(option.selected){
        if(option.value == 2){
          sortHightToLow(productArray);
        }else if(option.value == 1){
          sortLowToHight(productArray);
        }else{
          sortByRatings(productArray); 
        }
     }
   }
   
 }

//  ======================= filter Events ==========================

let clothing = document.getElementById("clothing");
let electronics = document.getElementById("electro");
let books = document.getElementById("books");
let clearBtn = document.getElementById("clearbtn");

clothing.onclick = clothingFilter;
electronics.onclick = electronicsFilter;
books.onclick = booksFilter;
clearBtn.onclick = clearFilter;

function clothingFilter(){
  filterProcts(productArray, "clothing" )
}
function electronicsFilter(){
  filterProcts(productArray, "electronics" )
}
function booksFilter(){
  filterProcts(productArray, "books" )
}
function clearFilter(){
  
  location.reload();
}

// ==================== Search =======================
let searchfield = document.getElementById("searchfield");
let searchbtn = document.getElementsByClassName("searchbtn")[0]

searchbtn.onclick = searchprod

function searchprod(){
  searchFunc(productArray, searchfield.value)
}

//======================== reviews ======================

let review1 = document.getElementById("review1");
let review2 = document.getElementById("review2");
let review3 = document.getElementById("review3");
let review4 = document.getElementById("review4");
let review5 = document.getElementById("review5");

review1.onclick = review1func;
review2.onclick = review2func;
review3.onclick = review3func;
review4.onclick = review4func;
review5.onclick = review5func;

function review1func(){
  reviewFunc(productArray, 1);
}
function review2func(){
  reviewFunc(productArray, 2);
}
function review3func(){
  reviewFunc(productArray, 3);
}
function review4func(){
  reviewFunc(productArray, 4);
}
function review5func(){
  reviewFunc(productArray, 5);
}

// ================================= Helpper Functions =================
function searchFunc(arr, target){
  let newArr = arr.filter(item => item.name.includes(target));
  dept.innerHTML =""
  displayProduct(newArr);
}

function reviewFunc(arr, target){
  let newArr = arr.filter(item => item.rating >= target);
  dept.innerHTML =""
  displayProduct(newArr);
  
}


function sortByRatings(arr){
  let newArr = arr.sort((a, b)=>b.rating - a.rating );
  dept.innerHTML =""
  displayProduct(newArr);
  
}
function sortHightToLow(arr){
  let newArr =[];
  newArr = arr.sort( (a, b) =>{
      if(a.price  < b.price){
          return 1;
      }
      else if(a.price > b.price){
          return -1;
      }
      else{
          return 0;
      }
    });
  dept.innerHTML ="";
  displayProduct(newArr);
}

function sortLowToHight(arr){
  let newArr =[];
    newArr = arr.sort( (a, b) =>{
    if(a.price > b.price){
        return 1;
    }
    else if(a.price < b.price){
        return -1;
    }
    else{
        return 0;
    }
        });

  dept.innerHTML ="";
  displayProduct(newArr);
}

function filterProcts(arr, target){
  let newArr = arr.filter(item => item.department === target);
  dept.innerHTML ="";
  displayProduct(newArr);
}



 
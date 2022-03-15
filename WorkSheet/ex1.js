"use strict";
/**
 * 
 * @param {Arraay} array is
 * @param {function} func is 
 * @returns{Array}return newArray 
 */
// function myfilter(array,func){
//     const newArray=[];
//     for(const elem of array){
//         if(func(elem)===true){
//             newArray.push(elem);
//         }
//     }
//     return newArray;
// }
// /**
//  * 
//  * @param {number} num  is 
//  * @returns{boolean} return t orf
//  */
// function func(num){
//     if (num>10){
//         return true;
//     }
//     return false;
// }
// const array=[5,11,1,33];
// console.log(myfilter(array,func));
// /**
//  * 
//  * @param {String} word is
//  * @returns{String} retun
//  */
// function reverseWord(word) {
//     const letterArray = word.split("");
//     letterArray.reverse();
//     return letterArray.join("");
//   }
//   let stringword="Hi How are you"
//   console.log(reverseWord(stringword));

// let john={name:"John",surname:"smith",yearsExperience:9};
// let pete={name:"pete",surname:"Hunt",yearsExperience:20};
// let people=[john,pete];
// let filter= people.filter((item)=>item.yearsExperience>10);
// console.log(filter);
// /**
//  * 
//  * @returns {String}return
//  */
// function abc(){
//     console.log("xyz");
//     return function(){console.log("Imn")};
    
// }
// setTimeout(abc(),5000);
 
// // const numArray=[55,4,11,3];
// // let result=numArray.reduce((max,current)=>max>current?max:current,0);
// // console.log(result);
// // const Array=[55,4,11,3]; 
// // let[...rest]=Array;
// // let result2=Math.max([55,4,11,3]);
// // console.log(result2);
// //"use strict ";
// /**
//  * 
//  * @returns{number} return  
//  */
// function area(){
//     console.log(this);
//     return 3.14*this.radius*this.radius;
// }
// const circle={radius:1,area:area};
// //circle.area();
// //console.log(circle.area());
// const myArea=circle.area();
// console.log(myArea());
/**
 * 
 */
// let animal = {
//      eats: true }; //using [ ] for curly brackets due to Sakai issue 
// function Dog(name) { 
//     this.name = name; } 
//    console.log("syste:"+ Dog.prototype);  
// let snoopy = new Dog("Snoopy"); 
// console.log( snoopy.eats ); // true  
// let animal = { 
//     eats: true 
//     }; 
//     function Dog(name) { 
//     this.name = name; 
//     } 
//     Dog.prototype = animal; 
//     let snoopy = new Dog("Snoopy"); 
//     console.log( snoopy.eats ); // true


//     function makeCounter(){
//         let count=0;
//         return function(){
//         return count++
//         }
//         if(count>= count+3){
//         return "warning";
//         }
        
//         }
/**
 * 
 * @returns {number}return 
 */
function makeCounter() {
    let count = 0;
    return function(increment) {
    if (increment === undefined) {
    count = count + 1;
    } else {
    count = count + increment;
    }
    if (increment > 3) {
    return "warning increment was by value greater than 3 "
    } else {
    return count;
    }
    }
    }
const counter = makeCounter();
console.log(counter());
console.log(counter(2));
console.log(counter(10));
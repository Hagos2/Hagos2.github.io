//"use strict";
//create and log to the console a json string from john. Then create a new instance of john, johnClone, using JSON.parse. Is john === johnClone?
//create and log to the console a json string from john. Then create a new instance of john, johnClone, using JSON.parse. Is john === johnClone?

// const john = {
//     name: "John",
//     surname: "Smith",
//     isAdmin: false,
//     birthday: {"year": 2000, "month": "February", "day": 3}, friends: [0,1,2,3]
//     };
//Write a function, smash, that uses map and destructuring in parameters of the callback function. Remember that you need () around destructuring brackets for an object if you do not have let or const. 
/*eslint-disable*/
// const bar = [{x:1, y:2}, {x:10, y:4}] 
// console.log("expect [3, 14]:", smash(bar));
// function smash(arr){
//     const returnArr=[];
//     for(const item of arr){
//         //const{x,y}=item;
//         returnArr.push(x+y);
//     }
//     return returnArr;
// }
// function findMax() {
//     let max = -Infinity;
//     for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) { max = arguments[i];
//     }
//     }
//     return max; }
//     const max1 = findMax(1, 123, 500, 115, 66, 88); 
//     const max2 = findMax(3, 6, 8);
// console.log(max1);

// let name = "John";
// function sayHi() { console.log("Hi, " + name);
// }
// name = "Pete";
// sayHi(); // what will it show: "John" or "Pete"?
// function makeWorker() { 
//     let Name = "jon"; 
//     return function() {
//     console.log(name); };
//     }
//     let Name = "pete";
//     // create a function
//     let work = makeWorker();
//     // call it
//     work();

//     let phrase = "Hello";
// if (true) {
//   let user = "John";
//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }
// sayHi();
let phrase = "Hello";
if (true) {
  let user = "John";
  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}
sayHi();
//but in strict mode is error
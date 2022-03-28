"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
//module.exports = { double, times100, myMap, triple1, triple2() }; //, triple1, triple2

//1. double
/**
 * 
 * @param {int} number is the input number. 
 * @returns{int} return two times thenumber.
 */
function double(number) {
  return 2 * number;
}

//2. times 100
/**
 * 
 * @param {int} number is the input number. 
 * @returns{int} return the product of 100*number.
 */
function times100(number) {
  return 100 * number;
}

//3. myMap
/**
 * 
 * @param {Array} testArray is the input array.
 * @param {Array} double is double the array.
 * @param {Array} times100 is each  times 100.
 * @returns {Array}returns new array.
 */
 function myMap(arr, double, times100) {
  let doubleArray = [];
  let times100Array = [];
  if (double) {
    for (let i = 0; i < arr.length; i++) {
      doubleArray[i] = double(arr[i]);
    }
    return doubleArray;
  } else {
    for (let i = 0; i < arr.length; i++) {
      times100Array[i] = times100(arr[i]);
    }
    return times100Array;
  }
}

//4. tripple

let triple1 = function (arg) {
  return 3 * arg;
};
let triple2 = (arg) => {
  return 3 * arg;
};
/**
 * 
 */
function log() { console.log("No Arguments");
}
function log(x) {
console.log("1 Argument: " + x); }
// function log(x, y) {
// console.log("2 Arguments: " + x + ", " + y);
// }
log(); 
log(5); 
log(6, 7);
let str = "Hello";
console.log( [...str] ); // H,e,l,l,o
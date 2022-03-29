"use strict";
let [name1, name2, ...rest] = ["abebe", "kebed", "hagos", "javascript","jsdestructuring"];
console.log(name1);//abebe
console.log(name2);//kebed
// rest is array of items, starting from the 3rd one
//rest=["hagos","javascript","jsdestructuring"]

console.log(rest[0]); // "hagos"
console.log(rest[1]); // "javascript"
console.log(rest.length); // "jsdestructuring"
//Write code to illustrate the use of the rest operator

// In a function call
//Example coding sum of number rest oprator in a function call
/**
 * 
 * @param  {...any} args is input
 * @returns{number} return sum of number
 */
function sum(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  console.log( sum(1) ); // 1
  console.log( sum(1, 2,3,4,5) ); // 15
  console.log( sum(1, 2, 3,4,5,6,7) );28
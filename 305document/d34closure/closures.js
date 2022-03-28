"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
function inArray(arr) {
  
    return function(x) {
      return arr.includes(x);
    };
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7];
  console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2




/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
function inBetween(low, high) {

    return function(x) {
      return x >= low && x <= high;
    };
  }
  
  //let arr = [1, 2, 3, 4, 5, 6, 7];
  console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6



/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(fieldName){
 
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
  }



/**
 * @returns {Function} closure that returns it's number
 */
 function makeArmy() {
  let shooters = [];

  let idx = 0;
  while (idx < 10) {
    let j=idx;
let shooter = function() { 
  console.log("I am shooter ", idx);
   return j;
};
    
    shooters.push(shooter); // and add it to the array
    idx++;
    

  }
  return shooters;
// //   // ...and return the array of shooters
// //   return shooters;
 }

  

  let army = makeArmy();
  
  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...
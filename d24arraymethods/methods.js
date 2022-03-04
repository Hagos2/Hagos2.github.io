"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr  it the array
 * @param {number} a   is the first number
 * @param {number} b  is the second nuber
 * @returns{Array} return new array
 */
  function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  console.log( filtered ); // 3,1 (matching values)
  
  console.log( arr ); // 5,3,8,1 (not modified)
  
/**
 * 
 * @param {Array} array  is the array
 * @param {number} a  is the first number
 * @param {number} b  is the second number
 * @returns{undefined} not retr
 */

  function filterRangeInPlace(array, a, b) {
    

      for (let i = 0; i < array.length; i++) {
        let val = array[i];
    
        // remove if outside of the interval
        if (val < a || val > b) {
          array.splice(i, 1);
          i--;
        }
      }
    
    }
    
    let array = [5, 3, 8, 1];
    
    filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
    
    console.log( arr ); // [3, 1]
  
 /**
  * 
  */

  function Calculator() {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }
  /**
   * 
   * @param {Array} arr  is the array
   * @returns{number} return array
   */

  function unique(arr) {
    if (arr.length === 0) return "";
    let result = [arr[0]];
    for (let each of arr) {
      if (result.indexOf(each) === -1) result.push(each);
    }
    return result;
  }
  
/**
 * 
 * @param {Array} array  is an array
 * @returns{object}return an object
 */

 function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}
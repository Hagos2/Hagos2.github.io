"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests
// /**
//  * 
//  * //@param {number} currentValue  the current amount .
//  * //@param {number} increment the increment of amount 
//  */
/**
 * 
 * @returns {Accumulator} constructor function
 */
 function Accumulator(currentValue, increment) {
   this.currentValue = currentValue;
   this.increment = increment;
 
   this.accumulate = function () {
     return (this.currentValue += this.increment);
   };
 
   this.report = function () {
     return this.currentValue;
   };
 }
 
/**
 * @returns {Calculator} this is a constructor function
 */
 function Calculator() {
    
    this.setValues = function (a, b) {
      this.a = a;
      this.b = b;
    };
  
    this.sum = function () {
      return this.a + this.b;
    };
  
    this.mul = function () {
      return this.a * this.b;
    };
  
    this.sub = function () {
      return this.a - this.b;
    };
    this.div = function () {
      return this.a / this.b;
    };
  }
  
     

   
   
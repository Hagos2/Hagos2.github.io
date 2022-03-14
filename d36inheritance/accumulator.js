"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {Accumulator }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {number} initialValue is starting value
 * @param {number} increment is amount added each call to accumulate
 * @returns {Accumulator} constructor function
 */
function Accumulator(initialValue, increment){
    this.currentValue = initialValue;
    this.increment = increment;
  
    this.accumulate = function () {
      return (this.currentValue += this.increment);
    };
  
    this.report = function () {
      return this.currentValue;
    };
//IMPLEMENT THIS
}
const accumulator = new Accumulator(5, 10);
console.log(accumulator.currentValue);
console.log(accumulator.increment);
console.log(accumulator.report());
accumulator.accumulate();
accumulator.accumulate();
console.log("the second output");
console.log(accumulator.currentValue);
console.log(accumulator.increment);
//console.log(accumulator.report());



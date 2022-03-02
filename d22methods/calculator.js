"use strict";
module.exports = {Calculator };
/**
 * @returns{number}returns number
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
  
  


/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
//module.exports = {Calculator }; //add all of your object names here that you need for the node mocha tests

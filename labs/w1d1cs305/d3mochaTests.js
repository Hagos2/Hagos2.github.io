"use strict";

//const assert = require("assert");
/* import from functions.js module */
const functionsModule = require("./compoundInterest.js"); 
const compoundInterest = functionsModule.compoundInterest;
describe(" compoundInterest", function(){ it("(100,10,1)", function(){
    assert.strictEqual(compoundInterest(100, 10, 1), 110.4 });
    it("(10000, 5, 10)", function(){ assert.strictEqual(compoundInterest(10000,5,10), 16470.09);
    });
    
});
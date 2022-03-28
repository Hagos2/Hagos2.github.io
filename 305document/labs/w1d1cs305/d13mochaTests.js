"use strict";

const assert = require("assert");
/* import from functions.js module */
const functionsModule = require("./computeSalesCommission.js"); 
const isSalaried = functionsModule.computeSalesCommission;
describe("test of ComputSalesCommission", function(){ 
    assert.strictEqual(computeSalesCommission(true, 200), 0); });
    it("tests not salaried and 200 sales", function(){ assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){assert.strictEqual(computeSalesCommission(true, 300), 3); });
    it("tests not salaried and 300 sales", function(){ assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 3500), 65); });
    it("tests not salaried and 3500 sales", function(){ assert.strictEqual(computeSalesCommission(false, 3500), 100);
    }); 
});
"use strict";
const assert = require("assert");


 module.exports={computeSalesCommission};
/**
 * 
 * @param {boolean} isSalaried is the first boolean.
 * @param {int} salesAmount the first number.
 * @returns {int} number. 
 */
function computeSalesCommission(isSalaried, salesAmount) {
    let commission;
    if (isSalaried == true) {
      if (salesAmount < 300) {
        commission = 0;
      } else if (salesAmount < 500) {
        commission = salesAmount * 0.01;
      } else {
        commission = salesAmount * 0.02;
      }
    } else if (isSalaried == false) {
      if (salesAmount < 300) {
        commission = 0;
      } else if (salesAmount >= 300 && salesAmount <= 500) {
        commission = salesAmount * 0.02;
      } else if (salesAmount > 500) {
        commission = salesAmount * 0.03;
      }
    }
    return commission;
  }
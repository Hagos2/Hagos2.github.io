"use strict";
/**
 * 
 * @param {int} initialAmount first number.
 * @param {int} annualInterestRate second number.
 * @param {int} years third number.
 * @returns {int} integer. 
 */


function compoundInterest(initialAmount, annualInterestRate, years) {
    return Math.pow(initialAmount * (1 + annualInterestRate / 100 / 12),(years * 12));
  };
  console.log("expect 110.47", compoundInterest(100, 10, 1));
  console.log("expect 16470.09", compoundInterest(10000, 5, 10));
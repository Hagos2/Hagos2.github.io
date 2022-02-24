"use strict";
/**
 * 
 * @param {int} number is the given number. 
 * @returns {int} return product of number.
 */
function multDigits(number) {
    let product = 1;
    while(number!=0){
        product*= number%10;
        number = parseInt(number/10);
    }
   return product;
}
console.log("expect 24: " ,multDigits(1234));
console.log("expect 3,0: ",  multDigits(102));
console.log("expect 8,8: ", sumDigits(8), multDigits(8));
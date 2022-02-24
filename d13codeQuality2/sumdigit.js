"use strict";
/**
 * 
 * @param {int}  first number .
 *  @param {int}  second number. 
 * @returns {number} the sum of numbers.
 * * @returns {number} the product of numbers.
 */
 

function sumDigits(number) {
    let sum = 0;
    while(number!=0){
        sum+= number%10;
        number = parseInt(number/10);
    }
    return sum;
}



console.log("expect 10 ,24: ", sumDigits(1234), //multDigits(1234));
console.log("expect 3,0: ", sumDigits(102), multDigits(102));
console.log("expect 8,8: ", sumDigits(8), multDigits(8));
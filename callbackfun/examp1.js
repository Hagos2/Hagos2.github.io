
"use strict";
/*
• write a function, multiplyEvens, that can be called with any number of arguments and returns the product of the even arguments
• do first using the arguments object • then using ...rest parameter
multiplyEvens(1, 6, 3, 4, 17, 2) → 48*/
/**
 * 
 * @returns {number}product of even numbers
 */
function multiplyEvens(){
    let prod=1;
    for(const arg of arguments){
        if(arg%2===0){
            prod=prod*arg;
        }
    }
return prod;
}
console.log(multiplyEvens(1, 6, 3, 4, 17, 2));
/**
 * 
 * @returns {number}product of even numbers
 */
function multiplyEvens(...args){
    let prod=1;
    for(const arg of args){
        if(arg%2===0){
            prod=prod*arg;
        }
    }
return prod;
}
console.log(multiplyEvens(1, 6, 3, 4, 17, 2));


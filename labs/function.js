"use strict";
/**
 * 
 * @param {function} func 
 * @param {*} arg 
 */

function mycallback(func,arg){
const returnVal=func(arg);
console.log("returnVal is:",returnVal);
}

function cube(num){
    return num*num*num;
}
mycallback(cube,10);
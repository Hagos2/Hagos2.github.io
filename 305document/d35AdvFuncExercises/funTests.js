"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
//module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} number  is the input number
 * @returns {number}return num
 */
 function func(number){
    return number*2;
}
/**
 * 
 * @param {Array} arr isthe input array  
 * @param {function} func  rturn double
 * @returns{Array} return new array
 */
function myMap(arr, func) {
    let newArr=[]
    for(const elem of arr){
        newArr.push(func(elem));
    }
//IMPLEMENTATION NEEDED
return newArr;
}

/**
 * 
 * @param {number} number is the input nuber 
 * @returns{boolean}  return false or true
 */
 function func(number){
    if(number>1){
        return true;
    }
    else{
        return false;
    }
}
/**
 * 
 * @param {Array} arr is the input array 
 * @param {function} func is afuncttion that retrun number grater than 1
 * @returns{Array} return new array
 */
function myFilter(arr, func) {
    const newArray=[]
    for(const elem of arr){
        if(func(elem)===true)
        newArray.push(elem);
    }
//IMPLEMENTATION NEEDED
return newArray;
}

/**
     * 
     * @param {number} total  is the sum
     * @param {number} current is tempraroy vale 
     * @returns{number} return number
     */
 function func(total, current) {
    return total + current;
}
/**
 * 
 * @param {Array} arr  is the input array
 * @param {function} func is the function 
 * @param {number} initialValue  is the first value
 * @returns{number} return sum
 */
function myReduce(arr, func, initialValue) {
    //IMPLEMENTATION NEEDED
    let tot = initialValue;
    for (let elmt of arr) {
        tot = func(tot, elmt);
    }
    return tot;
    
    }
    
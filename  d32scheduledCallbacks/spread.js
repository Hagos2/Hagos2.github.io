"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests
/*eslint-disable*/

/**
 * 
 * @param {Array} arr  is an array
 * @returns{Array} copy of array
 */
function copyArray(arr){
let copyArray=[...arr];
return copyArray;
}
console.log(copyArray([1,2,3,4]));
/**
 * 
 * @param {Array} arr1  is an array input
 * @param {Array} arr2  is the arr2
 * @returns{Array} return new object
 */
 function concat(arr1, arr2){
     let newArray=arr1.concat(arr2);//assignement
     //let NewArray=[...arr1,...arr2];//spread
     return newArray;

}
console.log(concat([1,2,3],[4,5,6]))
/**
 * 
 * @param  {...any} numbers is an array number
 * @returns{number} return
 */

 function findMin(...numbers) {
    
    //numbers=[1,2,3,4] ;   
        let minimum =  Math.min(...numbers);
        //return min; 
        return minimum
 }
console.log(findMin(1,2,3,4));


 function combineObjs(obj1, obj2){
      
let Obj3 = {...obj1,...obj2};
return Obj3;
 }
 let obj1 = {prop1: 1, prop2: 2};
 let obj2 = {prop3: 1, prop4: 2};

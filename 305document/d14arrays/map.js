"use strict";

const { createSecureContext } = require("tls");

//let lengths=["Bilbo","Gandalf","Nazgul"].map((item,index)=>""+index+":"+item.length);
/**
 * 
 * @param {number} a  number one
 * @param {nuber} b  number two
 * @returns{Array} return array
 */
// function compareNumeric(a, b) { 
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//     }
//     let arr = [ 1, 15, 2 ]; 
//     arr.sort(compareNumeric); 
//     console.log(arr);

    // descending sort
   
    /**
 * 
 * @param {number} a  number one
 * @param {nuber} b  number two
 * @returns{Array} return array
 */
// function compareNumeric(a, b) { 
//     if (a > b) return -1;
//     if (a == b) return 0;
//     if (a < b) return 1;
//     }
//     let arr = [ 1, 15, 2 ]; 
//     arr.sort(compareNumeric); 
   // console.log(arr);
//    let array=[1,2,15];
//    arr.sort(function(a, b) { 
//        return a - b; }); 
//        console.log(array);

let  arr=[1,2,3,4,5];
let result=arr.reduce(function(sum,current){
    return sum*current;},1);
let result2=arr.reduce((max,current)=>Math.max(max,current),-1000000);
// Sorry - could not retrieve information.
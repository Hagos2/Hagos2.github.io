"use strict";
/**
 * 
 * @param {Arraay} array is
 * @param {function} func is 
 * @returns{Array}return newArray 
 */
function myfilter(array,func){
    const newArray=[];
    for(const elem of array){
        if(func(elem)===true){
            newArray.push(elem);
        }
    }
    return newArray;
}
/**
 * 
 * @param {number} num  is 
 * @returns{boolean} return t orf
 */
function func(num){
    if (num>10){
        return true;
    }
    return false;
}
const array=[5,11,1,33];
console.log(myfilter(array,func));
/**
 * 
 * @param {String} word is
 * @returns{String} retun
 */
function reverseWord(word) {
    const letterArray = word.split("");
    letterArray.reverse();
    return letterArray.join("");
  }
  let stringword="Hi How are you"
  console.log(reverseWord(stringword));

let john={name:"John",surname:"smith",yearsExperience:9};
let pete={name:"pete",surname:"Hunt",yearsExperience:20};
let people=[john,pete];
let filter= people.filter((item)=>item.yearsExperience>10);
console.log(filter);
/**
 * 
 * @returns {String}return
 */
function abc(){
    console.log("xyz");
    return function(){console.log("Imn")};
    
}
setTimeout(abc(),5000);
 
const numArray=[55,4,11,3];
let result=numArray.reduce((max,current)=>max>current?max:current,0);
console.log(result);
const Array=[55,4,11,3]; 
let[...bb]=Array;
let result2=numArray.reduce(Math.max(numArray));
console.log(result2);
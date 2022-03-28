"use strict";
const assert = require("assert");


 module.exports={isVowel};
 /**
  * 
  * @param {String} str is string.
  * @returns {boolean} check v isvowel,if it is vowel true if not false.
  */
function isVowel(str){
    if (str === "a" || str === "e" || str == "i" || str == "o" || str == "u"){
        return true;
    }
    else{
    return false;
    }
}
console.log(isVowel("a"));
console.log(isVowel("e"));
console.log(isVowel("i"));
console.log(isVowel("o"));
console.log(isVowel("u"));
console.log(isVowel("z"));
console.log(isVowel("5"));
    
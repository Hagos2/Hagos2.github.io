"use strict";
//create and log to the console a json string from john. Then create a new instance of john, johnClone, using JSON.parse. Is john === johnClone?
//create and log to the console a json string from john. Then create a new instance of john, johnClone, using JSON.parse. Is john === johnClone?

// const john = {
//     name: "John",
//     surname: "Smith",
//     isAdmin: false,
//     birthday: {"year": 2000, "month": "February", "day": 3}, friends: [0,1,2,3]
//     };
//Write a function, smash, that uses map and destructuring in parameters of the callback function. Remember that you need () around destructuring brackets for an object if you do not have let or const. 
/*eslint-disable*/
const bar = [{x:1, y:2}, {x:10, y:4}] 
console.log("expect [3, 14]:", smash(bar));
function smash(arr){
    const returnArr=[];
    for(const item of arr){
        //const{x,y}=item;
        returnArr.push(x+y);
    }
    return returnArr;
}
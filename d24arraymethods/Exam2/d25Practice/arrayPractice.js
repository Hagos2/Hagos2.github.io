"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// //add all of your function names here that you need for the node mocha tests
// const numArray = [5,0, 7, 77, -20, 300, 51, 2];
// const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:"Barney", age: 80}]; 

function doubleNums(arr){
return arr.map(num => num * 2);
}
//console.log(doubleNums(numArray));

function doubleAges(arr){
    return arr.map(function(num){
        let people = {};
        people.name = num.name;
        people.age = num.age*2;
        return people;
    },{});
}

function filterEven(arr){
return arr.filter(num => num%2==0);
}
//console.log(filterEven(numArray));

function filterOver10(arr) {
return arr.filter(num => num.age>10);
}
//console.log(filterOver10(numArray));

function findEvenNum(arr){
return arr.find(num => num%2==0);
}
//console.log(findEvenNum(numArray));

function findEvenAge(arr){
    return arr.find(num => num.age%2==0);
}
//console.log(findEvenAge(peopleArray));

function includesEvenNum(arr){
return arr.includes(isEven);
}

//console.log(includesEvenNum(numArray));
function includesEvenNum(arr){
    for(let element of arr)
        if(element%2===0)
        return true;
       return false;
}

function includesEvenAge(arr){
    for(let key of arr)
        if(key.age%2===0)
        return true;
    
        return false;
}
function findSum(arr) {
    return arr.reduce((sum, cu) => sum + cu, 0)
}
 
function findAverage(arr) {
    return arr.reduce((sum, cu) => sum + cu, 0) / arr.length;
}
function findMax(arr) {
    return arr.reduce((max, cur) => max > cur ? max : cur, arr[0])
}
 
function findMaxAge(arr) {
    let maxAge = arr.reduce((max, cur) => max > cur ? max : cur, arr[0]);
 
    return maxAge;
}
 
function filterEvenAgeAverage(arr) {
    let length = arr.filter((item) => item.age % 2 === 0).length;
    let newArr = []
    let sum = arr.filter((item) => item.age % 2 === 0).reduce((sum, item) => sum + item.age, 0);
    newArr.push(sum)
    let avgerage = newArr.map((item) => item / length)[0];
    return avgerage;
}
function filterOddAgeAverage(arr) {
    let length = arr.filter((item) => item.age % 2 !== 0).length;
    let newArr = []
    let sum = arr.filter((item) => item.age % 2 !== 0).reduce((sum, item) => sum + item.age, 0);
    newArr.push(sum)
    let avgerage = newArr.map((item) => item / length)[0];
    return avgerage;
}
//console.log(includesEvenAge(peopleArray));
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, includesEvenNum, includesEvenAge, findMaxAge, findAverage, filterEvenAgeAverage, filterOddAgeAverage, findSum, findMax};
// function findEvenAge(arr){
//     return arr.map(num => num.age).find(num => num%2==0);
// }
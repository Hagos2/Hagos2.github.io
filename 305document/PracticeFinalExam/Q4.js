"use strict";
/*eslint-disable*/
//Q1
function reverseMove(str, steps) {
    const newArray = [];
    const wordArray = str.split(" ");
    for (const word of wordArray) {
      newArray.push(reverseWord(word));
    }
  //  debugger;
    const moved = move(newArray, steps);
    const invertedSentence = moved.join(" ");
    return invertedSentence;
  }
  
  
  function reverseWord(word) {
    const letterArray = word.split("");
    letterArray.reverse();
    return letterArray.join("");
  }
  
  function move(arr, num) {
    const movedArray = [];
    for (let i = 0; i < arr.length; i++) {
      const moveIndex = (i + num) % arr.length;
      movedArray[moveIndex] = arr[i];
    }
    return movedArray;
  }
  console.log(reverseMove("I am great", 0));
  
//Q2
const obj1 = {a: 1, b: 2};
const obj2 = {a: 1, b: 2};
const obj3 = obj2; 

console.log(obj1 === obj2);
console.log(obj1 === obj3);
console.log(obj3 === obj2);
console.log(obj1 == obj2);
console.log(obj1 == obj3);
console.log(obj2 == obj3);
console.log(obj3.a === obj2.a)
console.log(obj3.a === obj1.a)
//Q3
let divisor = 2;
function largestPrimeFactor(n){
while(n>1){
if(n%divisor === 0 ){

n /= divisor;

}else{
divisor++
}
}
return divisor;
}

let result = largestPrimeFactor(6936);
console.log(result) //5
//Q4
function computeCharges(array){
    return array.map(a=>`[${a.reduce((a, b)=>a+b)/2}, ${Math.max(a)}]`)
    }
    console.log(computeCharges([ [1,2,3,4,5] , [ 10, 20,30, 60 ] , [ 300, 200, 100 ] ]));
    
//Q5
function reverseAll(str){
    const strArray = str.split("");
    strArray.reverse();
    return strArray.join("");
   }
   
   console.log(reverseAll("Hi how are you!"));
   
//Q6   
function isSumBalanced(arr) {
    let sumE = 0;
    let SumO = 0

    if (arr.length === 0) {

      return false

    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {

        sumE += arr[i];

      } else if (arr[i] % 2 !== 0) {

        sumO += arr[i];

      } else if (sumE === sumO) {

        return true

      } else {

        return false

      }

    }
//Q7
/* Write a function, computeCharges, that will accept an array containing arrays of charges for customers.  Your function should return an array that contains an array for each customer that contains the average charge and maximum charge for that customer. 
E.g.,
const charges = [ [1, 2, 3, 4, 5] ,  [10, 20, 30, 60] , [300, 200, 100]  ];
computeCharges(charges) will return [[3, 5], [30, 60], [200, 300] ]  


Write an object literal to create an object with properties name and charges with values "Fred Snow" and [10, 20, 30, 60]
*/
//Q8
/* Write a function, computeCharges,  that will accept an array that contains objects with properties for the customer Id and charges, e.g., {custId: 5556, charges: [50, 40, 60]}.  Your function should return an array that contains objects with the customer Id, average charge, and maximam charge, e.g., {custId: 5556, average: 50, maximum: 60}. */

function computeCharges(charges) {
    const report = [];
    for (const cust of charges) {
      const custReport = {};
      custReport.average = average(cust.charges);
      custReport.maximum = maximum(cust.charges);
      report.push(custReport);
    }
    return report;
  }
  
  function average(arr) {
    let sum = 0;
    for (const num of arr) {
      sum += num;
    }
    const average = sum / arr.length;
    return average;
  }
  
  function maximum(arr) {
    let max = 0;
    for (const num of arr) {
      if (num > max) {
        max = num;
      }
    }
    return max;
  }
  const chargesArray = [{
      custId: 1,
      charges: [1, 2, 3]
    },
    {
      custId: 2,
      charges: [10, 20, 30]
    },
    {
      custId: 3,
      charges: [100, 200, 300]
    },
  ]
  console.dir(computeCharges(chargesArray));
  
//Q9
const arr1 = [1, 10];
const arr2 = [1, 10];
const arr3 = arr1;

console.log(arr1 === arr2); //_______________
console.log(arr2 === arr3);  //________________
console.log(arr1 === arr3); //_______________
console.log(arr1 == arr2); //_______________
console.log(arr2 == arr3);  //________________
console.log(arr1 == arr3); //_______________
console.log(arr2[1] == arr3[1]);  //________________
console.log(arr2[1] === arr3[1]); //_______________
//Q10
function computeBill(unit){
    let totalcost;
    let charge;
    if(unit<500){
    totalcost= unit*1.8;
    charge= totalcost-(totalcost*0.1);
    return charge;
    }
    else if(unit<1500){
    totalcost=500*1.8 + (unit-1000)*1.5;
    return totalcost;
    }
    else{
    totalcost= (500*1.8) + (1000*1.5) + (unit-1500)*1.2;
    charge= totalcost + (totalcost*0.05)
    return charge;
    }
    }
    console.log(computeBill(1800));
    
//Q11
function computeBill(unit) {
    let bill;
    if (unit <= 500) bill = 500 * 1.8;
    else if (unit <= 1500) bill = 500 * 1.8 + (unit - 500) * 1.5;
    else bill = (500 * 1.8) + (1000 * 1.5) + (unit - 1500) * 1.2;
    if (unit < 50) bill = bill - (bill * .1);
    if (unit > 150) bill = bill + (bill * .05)
    return bill;
  }
console.log(computeBill(480));
 console.log(computeBill(1200));
   console.log(computeBill(1720));

//Q12
// repeat with the interval of 2 seconds
let timerId = setInterval(function(){alert('tick')}, 2000);
// after 5 seconds stop
setTimeout(function(){ clearInterval(timerId); alert('stop'); }, 7000);

//Q13
let a = 5;
let b = 7;
console.log(a,b);
swap1(a,b);
console.log(a,b)

let arr = [1,2,3];
console.log(arr);
swap2(arr, 0, 2);
console.log(arr);

function swap1(a,b){
    let temp = a;
    a=b;
    b=temp;
}

function swap2(arr, i, j){
    let temp = arr[i];
    arr[i]= arr[j];
    arr[j]= temp;
}

//Q14
function isSumFirstLastOdd(n) {

    while (n >= 10) {
  
      let lastDigit = n / 10;
      let firstDigit = n % 10;
      if ((firstDigit + lastDigit) % 2 === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
  let result = isSumFirstLastOdd(12363);
  console.log(result)
  //Q15
  
  

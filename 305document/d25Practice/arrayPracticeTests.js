
   
"use strict";
/* global assert doubleNums  doubleAges filterEven filterOver10 findEvenNum findEvenAge 
/* comment out the node specific code when going to the browser
const assert = require("assert");  //always need this with node
const myExports = require("./arrayPractice.js");  //with node need the name of your file with your functions here
const doubleNums = myExports.doubleNums;  //do this for all of the functions used in the Mocha tests
const doubleAges = myExports.doubleAges;
const filterEven = myExports.filterEven;
const filterOver10 = myExports.filterOver10;
const findEvenNum = myExports.findEvenNum;
const findEvenAge = myExports.findEvenAge;
const includesEvenNum = myExports.includesEvenNum;
const includesEvenAge = myExports.includesEvenAge;
const findMaxAge = myExports.findMaxAge;
const findAverage = myExports.findAverage;
const filterEvenAgeAverage = myExports.filterEvenAgeAverage;
const filterOddAgeAverage = myExports.filterOddAgeAverage;
const findSum = myExports.findSum;
const findMax = myExports.findMax;
*/
 

let numArray;
let peopleArray;

describe("map practice", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
    });

    it("doubles an array of numbers", function () {
        assert.deepEqual(doubleNums(numArray), [10, 0, 14, 154, -40, 600, 102, 4]);
        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
    });

    it("doubles age", function () {
        assert.deepEqual(doubleAges(peopleArray),
            [{ name: "Sam", age: 30 }, { name: "William", age: 12 }, { name: "Lucy", age: 26 }, { name: "Barney", age: 160 }]);
        assert.deepEqual(peopleArray,
            [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }]);
    });
});

describe("filter practice", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
    });

    it("filters all even numbers", function () {
        assert.deepEqual(filterEven(numArray), [0, -20, 300, 2]);
        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
    });

    it("filters all age > 10", function () {
        assert.deepEqual(filterOver10(peopleArray),
            [{ name: "Sam", age: 15 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80  }]);
        assert.deepEqual(peopleArray,
            [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }]);
    });

    it("finds even in an array", function () {
        assert.strictEqual(findEvenNum(numArray), 0);
        assert.strictEqual(findEvenNum([1, 3, 801]), undefined);
    });
    it("finds even age ", function () {
        assert.deepEqual(findEvenAge(peopleArray), { name: "William", age: 6 });
        const peopleOddAge = [{ name: "Sam", age: 15 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 81  }];
        assert.deepEqual(findEvenAge(peopleOddAge), undefined);
    });

    it("checkes if array includes even", function () {
        assert.strictEqual(includesEvenNum(numArray), true);
       
    });
    it("checkes if array includes even age", function () {
        assert.strictEqual(includesEvenAge(peopleArray), true);
    });

    it("finds sum using reduce", function () {
        assert.deepEqual(findSum([3, 5, 1, 6, 5]), 20);
    });
 
    it("find average of an array", function () {
        assert.deepEqual(findAverage([3, 5, 1, 6, 5]), 4);
    });
    it("finds maximum number of an array", function () {
        assert.deepEqual(findMax(numArray), 300);
    });
    it("finds maximum age ", function () {
        assert.deepEqual(findMaxAge(peopleArray), { name: "Barney", age: 80 });
    });
    it("filters even age average ", function () {
        assert.deepEqual(filterEvenAgeAverage(peopleArray), 43);
    });
    it("filters odd age average", function () {
        assert.deepEqual(filterOddAgeAverage(peopleArray), 14);
    });
 
});
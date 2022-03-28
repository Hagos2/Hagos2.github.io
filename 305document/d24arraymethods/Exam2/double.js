// "use strict";
// const numArray = [5,0, 7, 77, -20, 300, 51, 2]
// const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
// "Barney", age: 80}]
// /**
//  * 
//  * @param {Array} arr  is  array of number
//  * @returns{Array} return array
//  */
// function doubleAges(arr){
//     return arr.map(function(num){
//         let people = {};
//         people.name = num.name;
//         people.age = num.age*2;
//         return people;
//     },{});
// }
// console.log(doubleAges(peopleArray ));
//     //return arr.map((peopleArray ));
//     /**
//      * 
//      * @returns {String}return string
//      */
//     function sayHi() {
//         console.log("Hello");
//         return function(){console.log("Bye")};
//         }
//         setTimeout(sayHi(), 2000);

        //Consider the following code
        "use strict";
/**
 * 
 * @returns {object}rturnaan
 */
        function perimeter(){
        console.log(this);
        return 4 * this.side;
    }
        const shape = {side: 5, perimeter: perimeter};
        shape.perimeter();
        //const myPerim = shape.perimeter;
           // myPerim();

           const array1 = [5, 44, 1,33];
let minvalue =Math.min(...array1);
           console.log(minvalue);
           // expected output: 3
 let john = { name: "John", surname: "Smith", age: 40 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let people = [ john, pete];

   let min=    people. reduce((youngest,item)=>youngest< item.age? youngest:item.age,people[0]); 
      
console.log(min);
let reorder=" javascript is the world's most popular programming language ";
let spliteorder=reorder.split(" ").sort((a,b)=>a.length-b.length);
let joind= spliteorder.join(" ");
console.log(joind);
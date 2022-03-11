//"use strict";
/*eslint-disable*/
//const abc = {a:1, b:2, add: function() { console.log("1+2 = 3?",this.a + this.b); }} 
//abc.add(); //works
//setTimeout(abc.add.bind(abc),2000);//NaN
//setTimeout is a global function,
//setTimeout(function(){abc.add.call(abc)},2000);

    // setTimeout(user.sayHi, 3000);// Hello, undefined!
    // setTimeout(user.sayHi.bind(user), 3000); 
    //setTimeout(function(){user.sayHi.call(user)}, 3000);

    // function foo() { 
    //     console.log(this);
    //  } 
    // const bob = {
    //     log: function() { 
    //         console.log("output1"+this);
    //     } 
    // };
    //     console.log("output2"+this); // this is window in browser ({} in node**)
    //      foo(); 
    //     //foo() is called by window object (global in node) 
    //     bob.log();//log() is c
    //"use strict"; function a() {
// function a() {
//    console.log(this);
// }

// const b = {
//     dog: 'fido',

//     log: function() {
//         console.log(this); 
//     }
// };


// console.log(this); 

// a();
// b.log();
// let mylog = b.log; 
// mylog();
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"], 
//     showList() {
//     this.students.forEach((student)=> { 
//         console.log(this.title + ': ' + student)
//     }); 
// }
//     }; 
//     group.showList();
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"], 
//     showList() {
//     this.students.forEach(function(student) { 
//         console.log(this.title + ': ' + student)
//     }).bind(this) ;
// }
//     }; 
//     group.showList();
/*Write a function, makeCounter() that declares a local variable, count, and another local variable, innerFunc, innerFunc will increment the count variable and return the incremented value.
Call it twice to make different counters, counter1 and counter2. Do they keep independent counts?*/

    // function makeCounter(){
    //     let count=0;
    //     const innerFunc=function(){
    //         count=count+1;
    //         return count;
    //     };
    //     return innerFunc;
    // }
    // const counter1=makeCounter();
    // const counter2=makeCounter();
    // counter1();
    // counter1();
    // counter2();
    // console.log(counter1());
    // console.log(counter2());
//     let name = "John";
// function sayHi() { 
//      name="robi"
// console.log("Hi, " + name);
// }

// name = "Pete";
// sayHi(); // what will it show: "John" or "Pete"?

// function makeWorker() 
// { 
//     let name = "John";
// return function() {
// console.log(name);
//  };
// }
// let name = "Pete";
// // create a function
// let work = makeWorker();
// // call it
// work(); 
// function sayHi() {
//     console.log("Hi"); }
//     console.log(sayHi.name);



//     const numArray = [5, 11, 1, 33];
// console.log(myFilter(numArray, element => element > 10));  //11

// function myFilter(arr, func) {
//  const newArr = [];
//   for (const element of arr) {
//     if (func(element)) {
//       newArr.push(element);
//     }
//   }
//   return newArr;
// }
// //debugger;

// /* function gt10(e) {
//   const b = e > 10;
//   return b
// } */
// //const found = myFind(numArray, gt10);
// //console.log(myFilter(numArray, element => element > 10));  //44

// const NumArray = [5, 44, 1, 33];

// const max = Math.max(...NumArray);
// console.log(max);

// const numArra = [5, 44, 1, 33];

// const min = numArra.reduce((min, curr) => curr < min ? curr : min, 1000);
// console.log(min);

// let john = {
//     name: "John",
//     surname: "Smith",
//     age: 10
//   };
//   let pete = {
//     name: "Pete",
//     surname: "Hunt",
//     age: 20
//   };
  
//   let users = [john, pete];
  
//   /* Use the filter function to filter the users array for all users
//    older than age 10 
//    [
//     { fullName: "Pete Hunt", id: 2 }
//   ]
//   */
//   //Hint: recall bracket versus dot notation
  
//   let usersMapped = users.filter(user => (
//     user.age > 10 ));
//   //OR
//   //debugger;
//   const mapped = users.filter(function(user) {
//     return user.age > 10; });
//   console.log(usersMapped);
//   console.log(mapped);

// //"use strict";
// function area(){
// console.log(this);  
// return this.side * this.side;
// }
// const square1 = {side: 5,  area: area};
// //console.log(square1.area());
// console.log(area());

// const circle10 = {
//     radius: 10,
//     circumference: function() {
//       return this.radius * 2 * Math.PI;
//     }
//   }
  
//   //console.log('circum: ', circle10.circumference());
  
//   function Circle_10(radius) {
//     this.radius = radius;
//     this.circumference = function() {
//       return this.radius * 2 * Math.PI;
//     };
//   }
//   //console.log('circum2: ',  Circle_10(10).circumference());


//   let banana = {
//     name: "banana",
//     color: "yellow",
//     price: 1
//   };
//   let apple = {
//     name: "red delicious",
//     color: "red",
//     price: 2
//   };
  
//   let fruit = [banana, apple];
  
//   /* Use the map function to map the users array to the following:
//    [
//     { fullName: "John Smith", id: 1 },
//     { fullName: "Pete Hunt", id: 2 },
//   ]
//   */
//   //Hint: recall bracket versus dot notation
  
//   let fruitMapped = fruit.map(function(fruit){return ({fruitName: fruit.name, cost: fruit.price})});
  
//   console.log(fruitMapped);
//   function makeCounter() {
//     let count = 0;
//     return function(increment) {
//       if (increment === undefined) {
//         count = count + 1;
//       } else {
//         count = count + increment;
//       }
//       if (increment > 3) {
//         return "warning increment was by value greater than 3: " + count;
//       } else {
//         return count;
//       }
//     }
//   }
  
//   const counter = makeCounter();
//   console.log(counter());
//   console.log(counter(2));
//   console.log(counter(10));
  
//   function Accumulator(startingValue) {
//     this.value = startingValue;
//     let x = 0;
  
//     this.read = function() {
//       this.value += 5;
//       x += 10;
//       console.log('x is bigger: ' , x);
//     };
  
//   }
  
//   let accumulator = new Accumulator(1);

//   accumulator.read();
//   accumulator.read();
//   console.log('accum value property: ', accumulator.value);
  
//   let arr = [1, 2, 3, 4, 5];
 
// let result = arr.reduce((accumulator, current) => accumulator + current, "");
 
// console.log(result);

// let John = { name: "John", surname: "Smith", age: 10 };
// let Pete = { name: "Pete", surname: "Hunt", age: 20 };
// let people = [ john, pete];

 
// let result2 = people.reduce((acumulator, current) => acumulator + current.age, "")
// console.log(result2)
// const abc = {
//     a: 1,
//     b: 2,
//     add: function() {
//       console.log("1+2 = 3?", this.a + this.b);
//     }
//   }
//   console.log("regular call to add: ");
//   abc.add();
//   /* use add inside a timeout */
//   console.log("wait 2 seconds to call: ");
  
//   const func = abc.add;
//   console.log('func is: ', this.func);
  
//   setTimeout(func, 2000);
//   setTimeout(abc.add.bind(abc), 2000);
//   setTimeout(function() {abc.add.call(abc)}, 2000);
//   setTimeout(function() {abc.add.apply(abc)}, 2000);
  
//   //make a similar function that will maintain a task list including the ability to add and delete tasks

// const account1 = makeAccount();
// console.log(account1('add', 10)); //10
// console.log(account1('add', 10)); //20
// console.log(account1('debit', 4)); //16

// function makeAccount() {
//   let balance = 0;
//   return function(op, amt) {
//     if (op === "add") {
//       balance += amt;
//     } else {
//       if (op === 'debit') {
//         balance -= amt;
//       }
//     }
//     return balance;
//   }
// }

// let john = {
//     name: "John",
//     surname: "Smith",
//     id: 1
//   };
//   let pete = {
//     name: "Pete",
//     surname: "Hunt",
//     id: 2
//   };
  
//   let users = [john, pete];
  
//   /* Use the map function to map the users array to the following:
//    [
//     { fullName: "John Smith", id: 1 },
//     { fullName: "Pete Hunt", id: 2 },
//   ]
//   */
//   //Hint: recall bracket versus dot notation
  
//   let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
//   }));
//   //OR
//   //debugger;
//   const mapped = users.map(function(user) {
//     const newObj = {
//       fullName: user.name,
//       id: user.id
//     };
//     return newObj;
//   }); 
//   console.log(usersMapped);
//   console.log(mapped);
  
//   "use strict";
// let phrase = "Hello";

// if (true) {
//      let user = "John";

//      function sayHi22() {
//           console.log(`${phrase}, ${user}`);
//      }
// }

// sayHi22(); // Hello, John


// let Phrase = "Hello";
// if (true) {
//   let user = "John";
//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }
// sayHi();  

(function() {
  let message = "Hello"; 
  console.log(message); // Hello
  })();


  

  
  

  
  
  
  
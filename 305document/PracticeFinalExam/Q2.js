"use strict";
/*eslint-disable*/
// let student = {
//     name: "John",
//     age: 30,
//     isAdmin: false,
//     courses: ["html", "css", "js"],
//     wife: null};

//   let json = JSON.stringify(student);
//   console.log(json);
//   console.log(json);
//   console.log(typeof json);
//   //Q2
//   let user = {
//     name: "John",
//     age: 30,
//      toString: function() {
//       return `{name: "${this.name}", age: ${this.age}}`;
//     } 
//   };
//   console.log(user.toString()); // {name: "John", age: 30}
//   console.log(user);
//   console.log(user);
//   //Q3
//   //"use strict";
//   /**
//    * 
//    */
// function a() {
//     console.log(this);}

//   const b = {
//     dog: "fido",
//     log: function() {
//       console.log(this);  }}

//   console.log(this); 
//   a(); 
//   b.log(); 
//   let mylog = b.log;
//   mylog();

// //Q4 
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
//   setTimeout(abc.add, 2000);

// //Q5
// let company = { // the same object, compressed for brevity
//     sales: [{
//       name: 'John',
//       salary: 1000
//     }, {
//       name: 'Alice',
//       salary: 600
//     }],
//     development: {
//       sites: [{
//         name: 'Peter',
//         salary: 2000
//       }, {
//         name: 'Alex',
//         salary: 1800
//       }],
//       internals: [{
//         name: 'Jack',
//         salary: 1300
//       }]
//     }
//   };

//   // The function to do the job
//   function collectNames(department) {
//     if (Array.isArray(department)) { // case (1)
//       return department.reduce((prev, current) => {
//         console.log('prev is: ', prev);
//         prev.push(current.name);
//         console.log('prev is: ', prev);
//         return prev;
//       }, []); // get the names
//     } else { // case (2)
//       let names = [];
//       for (let subdep of Object.values(department)) {
//         console.log("names 1 is: ", names);
//         let subdepNames = collectNames(subdep)
//         console.log("subdepNames: ", subdepNames);
//         names.concat(subdepNames); // recursively call for subdepartments, sum the results
//         console.log("names 2 is: ", names);
//       }
//       return names;
//     }
//   }

//   console.log("final result is: ", collectNames(company)); // 6700
//   //Q6

//   let company = { // the same object, compressed for brevity
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//   development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//     internals: [{name: 'Jack', salary: 1300}]
//   }
// };

// // The function to do the job
// function sumSalaries(department) {
//   if (Array.isArray(department)) { // case (1)
//     return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
//   } else { // case (2)
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
//     }
//     return sum;
//   }
// }

// console.log(sumSalaries(company)); // 6700
// //7
// let x = 5;
// let y = "7";
// let test = true;

// let result = x+y;
// console.log(result);
// console.log(typeof result);

// result = x+test;
// console.log(result)
// console.log(typeof result);

// result = test+y
// console.log(result);
// console.log(typeof result)

// result = y*2;
// console.log(result);
// console.log(typeof result)
// //8
// const quiz = {};
// quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
// { sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
// { sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
// quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];

// /**
//  * 
//  * @param {Object} ans1 is an answer object
//  * @param {Object} ans2 is an answer object 
//  * @returns {number} difference of the identifiers
//  */
// // function answerComparator(ans1, ans2) {
//      let sorted=[];
//      for(const sor of quiz.students){
//         let temp=sor.answers.sort((a,b)=>a.qid>b.qid?1:-1) 
//         console.log(temp)//check 
//         sorted.push(temp)

//    }
//  let sortedAn=quiz.students.answers.sort((ans1,ans2)=>ans1.qid>ans2.qid?1:-1)
//  console.log(sortedAn);
//  //9
//  function checkExam(arr) {
//     let score = 0;
//     for (const element of arr) {
//       if (element.answer === "") {
//         //no op
//       } else if (element.answer === element.key) {
//         score = score + 2;
//       } else {
//         score = score - 1;
//       }
//     }
//     return score;
//   }

//   const t1 = [{
//     answer: "a",
//     key: "a"
//   }, {
//     answer: "c",
//     key: "a"
//   }, {
//     answer: "b",
//     key: "b"
//   }];
//   const t2 = [{
//     answer: "a",
//     key: "a"
//   }, {
//     answer: "c",
//     key: "a"
//   }, {
//     answer: "",
//     key: "b"
//   }];
//   console.log("expect 3: ", checkExam(t1));
//   console.log("expect 1: ", checkExam(t2));

// //10
// function User(name){
//     console.log("1:" , this);
//     this.name = name;
//     console.log("2:" , this);
//     }
//   tina = {};
//   const thisUser = User.bind(tina);
//   thisUser("Rujuan");
//   thisUser("Tina");
//   console.log("3: ", tina);  
//   //11
//   let lama = {
//     x: 2,
//       bar: function() {
//         console.log("ma1: ", this);
//         this.y = true;
//         console.log("ma2: ", this);  }};

//     let lamalin = {
//       bat: function() {
//         this.foo();
//         console.log("lin1: ", this);  },

//       __proto__: lama,

//       foo: function() {
//         this.bar();
//         console.log("lin2: ", this);  },
//     };
//     console.log(lamalin.bat());

//12
// class Clock  {
//   constructor(template ){
//      this.template = template;
//      this.timer = null;
//   }

//    render() {
//      let date = new Date();

//      let hours = date.getHours();
//      if (hours < 10) hours = '0' + hours;

//      let mins = date.getMinutes();
//      if (mins < 10) mins = '0' + mins;

//      let secs = date.getSeconds();
//      if (secs < 10) secs = '0' + secs;

//      let output = this.template
//        .replace('h', hours)
//        .replace('m', mins)
//        .replace('s', secs);

//      console.log(output);
//    }

//    stop(){
//      clearInterval(this.timer);
//    }

//    start() {
//      this.render();
//      this.timer = setInterval(this.render.bind(this), 1000);
//    }

//  }

//  let clock = new Clock('h:m:s');
//  clock.start();


//  class ExtendedClock extends Clock {
//  constructor(template, precision = 1000) {
//    super(template);

//    this.precision = precision;
//  }

//  start() {
//    this.render();
//    this.timer = setInterval(() => this.render(), this.precision);
//  }
// }

(function(){
  "use strict";

  const me = {
    first: 'Tina',
    last: 'Xing',
    getFullName: function() {
      console.log( this.first + ' ' + this.last);
    }
  }

  setTimeout(me.getFullName, 1000);

  }());

const me = {
  first: 'Tina',
  last: 'Xing',
  getFullName: function () {
    return this.first + ' ' + this.last;
  }
}
const logMeasurements = function (height, weight) { // ‘this’ refers to the invoker
  console.log(this.getFullName() + height + ' ' + weight);
}
const logMe = logMeasurements.bind(me, '180cm', '70kg');
logMe(); // Tina Xing 180cm 70kg

logMeasurements.call(me, '180cm', '70kg'); // Tina Xing 180cm 70kg
logMeasurements.apply(me, ['180cm', '70kg']); // Tina Xing 180cm 70kg
logMeasurements.bind(me, '180cm', '70kg')(); // Tina Xing 180cm 70kg

/* (function(height, weight) {
  console.log(this.getFullName() + height + ' ' + weight);
}).apply(me, ['180cm', '70kg']); // Tina Xing 180cm 70kg */

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {

  let arr = Object.entries(salaries);
  let maxEntry = [null, 0];
  const [name, salary] = arr.reduce(([maxName, maxSal], [name, sal]) => (sal > maxSal) ? [name, sal] : [maxName, maxSal], maxEntry);
  return name;
}

//console.log("max salary is", topSalary(salaries));


// "use strict";
// function debit(amount) {
//   console.log(this);
//   this.balance = this.balance - amount;
//   console.log(this.balance);
// }
// const account = { balance: 10, debit: debit };
// const myDebit = account.debit;
// myDebit(5);
let user = {
  name: "John",
  age: 30,
   toString: function() {
    return `{name: "${this.name}", age: ${this.age}}`;
  } 
};
console.log(user.toString()); // {name: "John", age: 30}
//alert(user);
console.log(user);


//"use strict";
function a() {
  console.log(this);}

const b = {
  dog: 'fido',
  log: function() {
    console.log(this);  }}

console.log(this); 
a(); 
b.log(); 
let mylog = b.log;
mylog();










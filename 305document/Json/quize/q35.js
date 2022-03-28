"use strict";

/*eslint-disable*/
// function a() {
//   console.log(this);//2
// }

// const b = {
//   dog: 'fido',
//   log: function () {
//     console.log(this);//3
//   }
// }

// console.log(this);//1 
// a();
// b.log();
// let mylog = b.log;
// mylog();

//
// const abc = {
//   a: 1,
//   b: 2,
//   add: function() {
//     console.log("1+2 = 3?", this.a + this.b);
//   }
// }
// console.log("regular call to add: ");
// abc.add();
// /* use add inside a timeout */
// console.log("wait 2 seconds to call: ");
// setTimeout(abc.add, 2000);
//





let x = 5;
let y = "7";
let test = true;

let result = x + y;//57
console.log(result);
console.log(typeof result);//string

result = x + test;//5+true=5+1=6;
console.log(" out put" + result)
console.log(typeof result);

result = test + y//true7
console.log(result);
console.log(typeof result)

result = y * 2;//2*7=14
console.log(result);
console.log(typeof result);
//
let company = { // the same object, compressed for brevity
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
  development: {
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

console.log(sumSalaries(company)); // 6700
//
// const quiz = {};
// quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
// { sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
// { sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
// quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];

/**
 * 
 * @param {Object} ans1 is an answer object
 * @param {Object} ans2 is an answer object 
 * @returns {number} difference of the identifiers
 */
// function answerComparator(ans1, ans2) {
//      let sorted=[];
//      for(const sor of quiz.students){
//         let temp=sor.answers.sort((a,b)=>a.qid>b.qid?1:-1) 
//         console.log(temp)//check 
//         sorted.push(temp)

//    }
//  let sortedAn=quiz.students.answers.sort((ans1,ans2)=>ans1.qid>ans2.qid?1:-1)
//  console.log(sortedAn);

// function checkExam(arr) {
//   let score = 0;
//   for (const element of arr) {
//     if (element.answer === "") {
//       //no op
//     } else if (element.answer === element.key) {
//       score = score + 2;
//     } else {
//       score = score - 1;
//     }
//   }
//   return score;
// }

// const t1 = [{
//   answer: "a",
//   key: "a"
// }, {
//   answer: "c",
//   key: "a"
// }, {
//   answer: "b",
//   key: "b"
// }];
// const t2 = [{
//   answer: "a",
//   key: "a"
// }, {
//   answer: "c",
//   key: "a"
// }, {
//   answer: "",
//   key: "b"
// }];
// // console.log("expect 3: ", checkExam(t1));
// console.log("expect 1: ", checkExam(t2));
// //
// function User(name) {
//   console.log("1:", this);
//   this.name = name;
//   console.log("2:", this);
// }
// tina = {};
// const thisUser = User.bind(tina);
// thisUser("Rujuan");
// thisUser("Tina");
// console.log("3: ", tina);
//
let lama = {
  x: 2,
  bar: function () {
    console.log("ma1: ", this);//{ bat: [Function: bat], foo: [Function: foo] }
    this.y = true;
    console.log("ma2: ", this);
  }
};//{ bat: [Function: bat], foo: [Function: foo], y: true }


let lamalin = {
  bat: function () {
    this.foo();
    console.log("lin1: ", this);
  },//lin1:  { bat: [Function: bat], foo: [Function: foo], y: true }

  __proto__: lama,

  foo: function () {
    this.bar();
    console.log("lin2: ", this);
  },//lin2:  { bat: [Function: bat], foo: [Function: foo], y: true }
};
console.log(lamalin.bat());//1

// ma1:  { bat: [Function: bat], foo: [Function: foo] }
// ma2:  { bat: [Function: bat], foo: [Function: foo], y: true }
// lin2:  { bat: [Function: bat], foo: [Function: foo], y: true }
// lin1:  { bat: [Function: bat], foo: [Function: foo], y: true }
// undefined

"use strict";
/* Write a program to compute student grades and the average score for the class.  Your program should have a quiz object that will contain properties of “students” and “key”.  The “students” property will be an array of student objects of the following form:

student10 = {sid: 10, answers: [{qid: 2, ans: “b”}, {qid: 3, ans: “a”}, {qid: 1, ans: “b”}] }
It has a property “sid” (student id) and another property “answers”.  The answer property holds an array that records the students answers for the quiz.  The array holds objects that have a question id (“qid”) property that uniquely identifies the question, and an “ans” property that holds the student’s answer.

The ”key” property of the quiz will hold an array with objects that give the correct answers.  

Create an object named quiz with the following methods
•	getAverage(), computes the average score over all students, 
•	scoreStudent(sid), computes the quiz score for this student

The answer arrays might not have the questions in the same order.  Write a function, answerComparator, that you can use to sort the answer arrays by the quiz id, “qid”.   You may assume that there will be answer objects for every question so that once they are sorted they arrays will have the student answers and the corresponding key answer in the same position of each array.  Score 1 point for each answer that matches the key.
*/

const quiz = {};
quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
{ sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
{ sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];

/**
 * 
 * @param {Object} ans1 is an answer object
 * @param {Object} ans2 is an answer object 
 * @returns {number} difference of the identifiers
 */
function answerComparator(ans1, ans2) {
  return ans1.qid - ans2.qid;
}

/**
 * 
 * @param {*} sid student id
 * @returns {number} score for student
 * find this student
 * sort the student answers
 * compare them against key and add up matches
 */
quiz.scoreStudent = function (sid) {
  const student = this.students.find(aStudent => sid === aStudent.sid);
  const studentAnswers = student.answers.sort(answerComparator);
  const key = this.key;
  let score = 0;
  for (let i = 0; i < key.length; i++) {
    if (studentAnswers[i].ans === key[i].ans) {
      score++;
    }
  }
  return score;
};

/**
 * @returns {number} average score of all students
 * go through list of students and get score of each, then the average
 */
quiz.getAverage = function () {
  let total = 0;
  for (const student of this.students) {
    total += this.scoreStudent(student.sid);
  }
  return total / this.students.length;

};

console.log("expect 1: ", quiz.scoreStudent(10));
console.log("expect 2: ", quiz.scoreStudent(11));
console.log("expect 2: ", quiz.scoreStudent(12));
console.log("expect 1.667: ", quiz.getAverage());
//
class User {
  constructor(name = "Anonymous") {
    this.name = name;
  }
  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}
let fred = new User();
console.log(fred);
console.log(fred.__proto__);
console.log(User.prototype);
fred.sayHi();
 let bob = new User("Bob");
console.log(bob);
bob.sayHi();


//
(function(){
  //"use strict";
  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList:  function() {
      this.students.forEach(
        //function(student){console.log(this.title + ': ' + student);}  //error – ‘this’ is undefined (or window)
        student => console.log(this.title + ': ' + student)    //works as expected – ‘this’ comes from lexical environment, showList method
      );
    }
  };
  group.showList();
  
  }())
  
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


  const obj1 = {a: 1, b: 2};
const obj2 = {a: 1, b: 2};
const obj3 = obj2; 

console.log(obj1 === obj2);//f
console.log(obj1 === obj3);//f
console.log(obj3 === obj2);//t
console.log(obj1 == obj2);//f
console.log(obj1 == obj3);//f
console.log(obj2 == obj3);//t
console.log(obj3.a === obj2.a)//t
console.log(obj3.a === obj1.a)//t
  //
  function computeCharges(array){
    return array.map(a=>`[${a.reduce((a, b)=>a+b)/2}, ${Math.max(a)}]`)
    }
    console.log(computeCharges([ [1,2,3,4,5] , [ 10, 20,30, 60 ] , [ 300, 200, 100 ] ]));
    //
    function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log( rabbit.eats ); // ?
    
  
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
  
  
  
  












"use strict";
/*eslint-disable*/
//Q1
class Shape {
    area() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.radius = r;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(b, h) {
        super();
        this.base = b; 
        this.height = h;
    }

    area() {
        return this.base * this.height / 2;
    }
}

function cumulateShapes(shapes) {
    return shapes.reduce((sum, shape) => {
        if (shape instanceof Shape) {
            console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`);
            return sum + shape.area()
        }
        throw Error('Bad argument shape.');
    }, 0);
}

const shapes = [new Circle(3), new Rectangle(2, 3), new Triangle(3, 4), new Circle(2)];

console.log(cumulateShapes(shapes));
//Q2
class User {
    constructor(name ) {  this.name = name;    }
    sayHi() {  console.log(`Hello, ${this.name}!`);
 } }

// class is a function
console.log(typeof User); // function

// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

const sam = new User("Sam");
// and the name property is in the object
console.log(Object.getOwnPropertyNames(sam)); // name

//Q3
class User {
    constructor(name = "Anonymous") {
        this.name = name;
    }
    sayHi() {
        console.log(`Hello, ${this.name}!`);
    }
}
fred = new User();
console.log(fred);
console.log(fred.__proto__);
console.log(User.prototype);
fred.sayHi();
bob = new User("Bob");
console.log(bob);
bob.sayHi();
//Q4
let hamster = {
    stomach: [],
  
    eat(food) {
      // assign to this.stomach instead of this.stomach.push
      this.stomach = this.stomach[food];
    }
  };
  
  let speedy = {
     __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // Speedy one found the food
  speedy.eat("apple");
  speedy.eat("apple2");
  alert( speedy.stomach ); // apple
  
  // Lazy one's stomach is empty
  alert( lazy.stomach ); // <nothing>
  
//Q5
let head = {    glasses: 1
}

let table = {    pen: 3,
__proto__: head
};
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};
let pockets = {    money: 2000, 
__proto__: bed
};
/* pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
*/
console.log("expect 3: ", pockets.pen);
console.log("expect 1: ", bed.glasses);
//Q6
// animal has methods
let animal = {
    walk: function() {
      if (!this.isSleeping) {
        alert(`I walk`);
      }
    },
    sleep: function() {
      this.isSleeping = true;
    }
  };
  
  let rabbit = {
    name: "White Rabbit",
    __proto__: animal
  };
  debugger;
  // modifies rabbit.isSleeping
  rabbit.sleep();
  
  console.log(rabbit.isSleeping); // true
  console.log(animal.isSleeping); // undefined (no such property in the prototype)
  
//Q7
  //"use strict";

let phrase = "Hello";
if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }

}
  
  sayHi();


//Q8
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
    //Q9
    let [name1, name2, ...remainder] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];


const fruit = ["apple", "mango", "pear", "orange"];

const [f1, f2, f3, f4] = ["apple", "mango", "pear", "orange"];

console.log("expect pear : ", f3);


const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al",  center:  "Big Sleep" }

const {point, shooting, power, small, center} = team;

console.log("expect Big Sleep", center);

const {point: one, shooting: two, power: four, small: three, center: five} = team;

console.log("expect Jim: ", four);
//Q10
function foo(){alert("foo!")}

console.log(typeof foo);

const arr = [];
console.log(typeof arr);

//Q11

//[1,2,3,4].forEach(function(){console.log()})
["Bilbo", "Gandalf", "Nazgul"].forEach(function(character){console.log(character)} );

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});







    
    
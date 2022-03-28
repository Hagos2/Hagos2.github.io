"use strict";
// let head = {
//     glasses: 1
// };
// let table = {
//     pen: 3,
//     _proto_: head
// };
// let bed = {
//     sheet: 1,
//     pillow: 2,
//     _proto_: table
// };
// let pockets = {
//     money: 2000
// };
// console.log("expect 3: ", pockets.pen);
// console.log("expect 1: ", bed.glasses);
// let animal = { eats: true };
// function Rabbit(name) { this.name = name; }
// Rabbit.prototype = animal;
// let rabbit = new Rabbit("White Rabbit"); console.log(rabbit.eats); // true
//rewrite this to have the same inheritance hierarchy using __proto__ instead of the constructor . I.e.,
//delete the Rabbit prototype and use only object literals and __proto__

// let animal={
//     eats:true,
// }
// let Rabbit={
//     name:"White Rabbit",
//     _proto_ :animal
// }


// let animal = {
//     walk() {
//         if (!this.isSleeping) {
//             console.log("I walk");
//         }
//     },
//     sleep() {
//         this.isSleeping = true;
//         //console.log("hi")
//     }
// };

// let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
// };

// // modifies rabbit.isSleeping
// console.log(rabbit.walk() )
// console.log("i donot belive");
// console.log(rabbit.sleep());
// console.log("step1");
// console.log(rabbit.isSleeping);
// console.log("step2");
// console.log(animal.isSleeping); 




// let animal = {
//     eats: true
//     };
//      letDog={
//     name: Snoopy

//     }
//     dog ._proto_=animal;
//      console.log(dog.eat)//true
//      //
//      class User{
//         constructor(name){
//        this.name=name;
//        sayHi(){
//         alert(this.name);
//        }

//        let user = new User("John");
//        user.sayHi();
//        ///
//        class Counter{
//         constructor(){
//         this._count=0;
//         }
//         up() {
//         return ++ this._count;
//         }
//         down(){
//         return --this._count;
//         };

//         }
//         let counter = new Counter();

//         alert( counter.up() ); 
//         alert( counter.up() ); 
//         alert( counter.down() ); 

//
/**
 * 
 */
/*eslint-disable*/
function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();



delete rabbit.eats;

console.log(rabbit.eats); // ?

const john = {
    name: "John",
    surname: "Smith",
    isAdmin: false,
    birthday: { "year": 2000, "month": "February", "day": 3 },
    friends: [0, 1, 2, 3]
};

const jsonString = JSON.stringify(john);
console.log("jsonString is: ", jsonString);

const johnClone = JSON.parse(jsonString);
console.log("johnClone is: ", johnClone);

console.log(john === johnClone);

//
function Dog(name) {
    this.name = name;
    this.walk = function () {
        console.log(this.name + ' is walking . . ');
    }
}

let myDog = new Dog('Candy');
console.log("output :" + myDog);
myDog.walk();

//
let animal = { name: 'default' }
function Bird(name, age) {
    this.age = age; this.name = name;
}
Bird.prototype.fly = function () {
    return this.name + ' is flying';
}
let peetee = new Bird("Peetee", 12);
console.log(peetee.age===12);
Bird.prototype = animal; 
 let polly = new Bird("Polly");
console.log((Bird.prototype.name === "Peetee")); 
console.log(" out :"+(polly.__proto__ === peetee.__proto__));




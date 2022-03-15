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


let animal = {
    walk() {
        if (!this.isSleeping) {
            console.log("I walk");
        }
    },
    sleep() {
        this.isSleeping = true;
        //console.log("hi")
    }
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};

// modifies rabbit.isSleeping
console.log(rabbit.walk() )
console.log("i donot belive");
console.log(rabbit.sleep());
console.log("step1");
console.log(rabbit.isSleeping);
console.log("step2");
console.log(animal.isSleeping); 




let animal = {
    eats: true
    };
     letDog={
    name: Snoopy
    
    }
    dog ._proto_=animal;
     console.log(dog.eat)//true
     //
     class User{
        constructor(name){
       this.name=name;
       sayHi(){
        alert(this.name);
       }
       }
       let user = new User("John");
       user.sayHi();
       ///
       class Counter{
        constructor(){
        this._count=0;
        }
        up() {
        return ++ this._count;
        }
        down(){
        return --this._count;
        };
        
        }
        let counter = new Counter();
        
        alert( counter.up() ); 
        alert( counter.up() ); 
        alert( counter.down() ); 
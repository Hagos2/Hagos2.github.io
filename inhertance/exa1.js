"use strict";
let head = {
    glasses: 1
};
let table = {
    pen: 3,
    _proto_: head
};
let bed = {
    sheet: 1,
    pillow: 2,
    _proto_: table
};
let pockets = {
    money: 2000
};
console.log("expect 3: ", pockets.pen);
console.log("expect 1: ", bed.glasses);
// let animal = { eats: true };
// function Rabbit(name) { this.name = name; }
// Rabbit.prototype = animal;
// let rabbit = new Rabbit("White Rabbit"); console.log(rabbit.eats); // true
//rewrite this to have the same inheritance hierarchy using __proto__ instead of the constructor . I.e.,
//delete the Rabbit prototype and use only object literals and __proto__

let animal={
    eats:true,
}
let Rabbit={
    name:"White Rabbit",
    _proto_ :animal
}




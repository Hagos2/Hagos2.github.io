"use strict";
const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" };
const{point,shooting,power,small,center}=team;
console.log("expect Big Sleep", center); 
console.log("expect Jim", power);
//2
const{point:one,shooting:two,power:three,small:four,center:five}=team;
//...............
console.log("expect Jim: ", four); 
console.log("expect Bob: ", one);
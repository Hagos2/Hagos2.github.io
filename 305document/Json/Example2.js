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
// let student ={
//     name:"John",
//     age:30,
//     isAdmin:false,
//     course:["html","css","js"],
//     wife:null};
// let json =JSON.stringify(student);
// console.log(json);
 //let user = "{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }";
//  user = JSON.parse(user);
 //console.log(user);
 let numbers = "[0, 1, 2, 3]"; 
 numbers = JSON.parse(numbers);
 console.log(numbers );

 const john = {
    name: "John",
    surname: "Smith",
    isAdmin: false,
    birthday: {"year": 2000, "month": "February", "day": 3}, friends: [0,1,2,3]

    };
    const cloneJohn2 = JSON.parse(JSON.stringify(john));
    console.log(cloneJohn2);
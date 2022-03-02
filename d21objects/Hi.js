
"use strict";

const manger ={
    name:"ghon",
    age:27,
    job:"oftware Engineer"
};


const intern={
    name:"Ben",
    age:21,
    job:"software Engineer Intern"
    //sayHi:sayHowdy;
};
/**
 * @returns{undefined}
 */
function sayHowdy(){
    const output="hello,my name is "+this.name+".  I am "+this.age+ ".my job is"+this.obj+ ".";
    console.log(output);
}
manger.sayHi=sayHowdy;//undefine b/c no return
intern.sayHi=sayHowdy;
manger.sayHi;//hello my name Jhon. i am 27.my job is software engineer
intern.sayHi;
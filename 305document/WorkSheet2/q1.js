"use strict";
/*eslint-disable*/
// const arr15=[1,2,3,4,5];
// let[...array]=arr15;
// console.log(array);
// function scotland(){
//     let aberdeen={
//         origin:true,
//         expression:function(){
//             console.log(this);
//         }
//     };
// let innerFn=aberdeen.expression;
// innerFn();
// aberdeen.expression();
// }
// scotland();

// function countDown(from){
//     let timerId=setInterval(down,1000);
//     let count=from;
//     function down(){
//         console.log(count);
//         if(count<=0){
//             clearInterval(timerId);
//         }
        
//         else{
//             count--;
//         }
        
//     }
    
// }
// console.log(countDown(2));

// function isLargeNumber(num){
//     //if(num>=7||num<=13)return -1;
//     let max=13;
//     //let isSmallNumbe=7;
//     if(num>max){
//     max=num;
//     }
//     return max;
// }
  

// const arr=[12,8,5,130,44];

// function myFind(arr,isLargeNumber){

//     for(const elem of arr){
//         isLargeNumber(elem)
//      //let large=  arr.reduce(max,13);
//        return large;
//     }
//      return -1;   
       
//     }

// console.log(myFind(arr,isLargeNumber));
//6
function makeSecureStack(){
    const secureArr=[];
    return function(element,operation){
        if(operation==="push"){
            secureArr.push(element);
            return;
        }
    }
}

 const secure = makeSecureStack()
 secure(1,"push");
 secure(2,"push");
 secure(3,"push");
console.log(secure(55,"push"));
//7
function Incrementer(intial){
    this._intial=intial;
    return {
        
increment(amt){
    return intial+amt;
},
decrement(amt){
    return intial-amt;
}
    };
}
let inc=new Incrementer(100)
//console.log(inc.increment(10));
//console.log(inc.decrement(10));
//b
function collectManufactures(sensors){
let group=[];
for(const elements of sensors){
    if(!group.includes(elements.manufacture)){
    group.push(elements.manufacture);
    }
}
return group;
}
//c
function getlatestEventOfSensors(sensors,id){
    let sensor=sensors.find(element=>element.id===id);
    return sensor.events.reduce((event,current)=>{
        if(current.time>event.time){
            return current;
        }
        else{
            return event;
        }
    });
}
//
const numArray=[55,4,11,3];
let[a,b,c,d]=numArray;
let result=Math.max(a,b,c,d);
//console.log(result);

// function area(){
//     console.log(this);
//     return 3.14*this.radius*this.radius;
// }
// const circle={
//     radius:1,
//     area:area
// };
//console.log(circle.area());
 //const myArea=circle.area;
 //console.log("output"+myArea());
 console.log("output");
function area(){
    console.log( 3.14*this.radius*this.radius);
}
const circle={
    radius:1,
    area:area
};
setTimeout(()=>area.apply(circle),500);


function Player(name,age){
   this.name=name;
   this.age=age;
}
   Player.prototype.play=function() {
       return this.name+"is playing";
   }
let fred=new Player(" Fred ",12);
console.log(fred.age===12);
// console.log(" q2="+fred._proto_.age===12);
// console.log(" q3="+Player._proto_.name==="Fred");
// console.log("q4= "+Player.prototype.play()==="Fred is playing");
// console.log("q5="+fred.play()==="Fred is playing ");
// console.log("step2");
// let pete=new Player("pete" ,15);
// console.log("q6="+Player.prototype.name==="pete");
// console.log("q7="+pete._proto_ === fred._proto_);
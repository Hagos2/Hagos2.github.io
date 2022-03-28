"use strict";
const quiz ={
    s101:[1,1,2,4],
    s102:[2,1,2,2],
    s103:[3,1,3,4]
}
for(const studId in quiz){
    console.log(quiz[studId]);
}
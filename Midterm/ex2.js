/*eslint-disable*/

const express= require('express');
let app= express();
app.use(express.urlencoded());
app.use((req,res,next)=>{
    console.log('output 0');
    next();
});
app.get('/',(req,res,next)=>{   
    console.log('output 1');
    next();
},

(req,res,next)=>{
    console.log('output 2');
    next('route');
},
(req,res,next)=>{
    console.log('output 3');
    res.end();
});
app.get('/',(req,res,next)=>{
console.log('output 4');
next();
},
(req,res,next)=>{
    console.log('output 5');
    res.end();

});

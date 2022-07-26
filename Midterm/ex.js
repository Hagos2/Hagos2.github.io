/*eslint-disable*/

const express= require('express');
let app= express();
app.use(express.urlencoded());

app.get('/', (req,res,next) => {
console.log('1 there is new requessst');
next();
});

app.get('/courses',function(req,res,next){
    console.log('2 middleware');
   // next('middle ware');
    res.end('2 middle ware');
    //next()
    });

app.post('/courses',function(req,res,next){
        console.log('3 3333');
        //next('course list');
        res.send('course list');
        })
        
app.listen(3000, ()=> console.log("Listening to 3000....."));
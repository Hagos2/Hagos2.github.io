const express=require('express');
const path=require('path');
const app=express();
app.use(express.urlencoded());
app.get('/',(req,res,next)=>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <body> 
<form action="signup" method="post">
firstname:<input name="firstname"/> <br/>
lastname:<input name="last
</form>
<p> </p>
    </body>
    </html> 
    `);
});
app.post('/signup',(req,res,next)=>{

if(req.body.firstname && req.body.lastname){
    
}


})

/* eslint-disable*/

const express = require('express');

const cors = require('cors');
const mongoose=require('mongoose');
const bookRouter = require('./routes/bookRouter');
const{mongoConnect}=require('./mongodbutil/database')
const app = express();
app.use(cors);
app.use(express.json()); //req.body = {}
app.use('/books', bookRouter);
app.use((req, res, next) => {
    res.status(404).send({error: 'API NOT SUPPORTED'});
});
app.use((err,req,res,next)=>{
    console.log(err);
res.status(500).send({error:message});
});
mongoose.connect('mongodb://localhost:27017/shopping')
.then(()=>{
    app.listen(3000);
});

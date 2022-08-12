const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');


const booksroute = require('./routes/booksroutes');
const loginroute = require('./routes/loginroute');

const app = express();

app.use(cors())
app.use(express.json());

app.use('/books', booksroute);
app.use('/login', loginroute);


app.use((req, res, next) => {
    res.status(404).send({error: "API NOT SUPPORTED"});
});
app.use((err, req, res, next) =>{
    res.status(500).send({error: err.message})
})

mongoose.connect('mongodb://127.0.0.1:27017/library1')
 .then (()=>{
    app.listen(3000, ()=> {console.log("listening to 3000")});
 })


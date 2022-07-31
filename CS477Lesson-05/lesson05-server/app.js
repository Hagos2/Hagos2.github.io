/* eslint-disable*/

const express = require('express');

const bookRouter = require('./routes/bookRouter');

const app = express();

app.use(express.json()); //req.body = {}

app.use('/books', bookRouter);

app.listen(3000);

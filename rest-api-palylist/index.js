const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


require('dotenv').config();
//console.log(process.env);
//const routes = require('./routes/api');

// app express set up
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/streamon');
mongoose.Promise = global.Promise;

// static imgae and html files
app.use(express.static('public'));

app.use(bodyParser.json());

// initialize routes -middleware-
app.use('/api',require('./routes/api'));

// error handling middleware --if form not completely filled a catch/next response
app.use(function(err, req, res, next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listening on 
app.listen(process.env.port || 8000, function() {
    console.log('now listening for requests');
})
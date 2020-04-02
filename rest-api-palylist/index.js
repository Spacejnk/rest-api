const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
//console.log(process.env);
//const routes = require('./routes/api');
// app set up
const app = express();

app.use(bodyParser.json());

// initialize routes -middleware-
app.use('/api',require('./routes/api'));

// listening on 
app.listen(process.env.port || 8000, function() {
    console.log('now listening for requests');
})
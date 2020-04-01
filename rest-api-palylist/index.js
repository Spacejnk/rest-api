const express = require('express');
const routes = require('./routes/api');
// app set up
const app = express();

// listening on 
app.listen(process.env.port || 8000, function() {
    console.log('now listening for requests');
})
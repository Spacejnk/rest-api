const express = require('express');

// app set up
const app = express();

app.get('/api', function(req,res) {
    console.log('Get request');
    res.send({name:'Will'});
})
// listening on 
app.listen(process.env.port || 8000, function() {
    console.log('now listening for requests');
})
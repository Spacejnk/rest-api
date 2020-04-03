const express = require('express');
const router = express.Router();
const Stream = require('../models/stream');

// get a list of stream info from db
router.get('/stream', function(req, res, next) {
    res.send({type:'GET'});
});
// add to db
router.post('/stream', function(req, res, next) {
    //console.log(req.body);
    let stream = new Stream(req.body);
    // mongoose save method -- into db in stream.js //stream.save(); use create instead
    Stream.create(req.body).then(function(){
        res.send(stream);
    }).catch(next);
});

// update to db
router.put('/stream/:id', function(req, res, next) {
    res.send({type:'PUT'});
});

// delete info in db
router.delete('/stream/:id', function(req, res, next) {
    console.log(req.params.id);
    res.send({type:'DELETE'});
});

module.exports = router;
const express = require('express');
const router = express.Router();

// get a list of stream info from db
router.get('/stream', function(req, res) {
    res.send({type:'GET'});
});
// add to db
router.post('/stream', function(req, res) {
    console.log(req.body);
    res.send({
    type:'POST',
    name: req.body.name,
    title: req.body.title
    });
});

// update to db
router.put('/stream/:id', function(req, res) {
    res.send({type:'PUT'});
});

// delete info in db
router.delete('/stream/:id', function(req, res) {
    res.send({type:'DELETE'});
});

module.exports = router;
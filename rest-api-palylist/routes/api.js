const express = require('express');
const router = express.Router();
const Stream = require('../models/stream');


// get a list of stream info from db
router.get('/stream', function(req, res, next) {
    // Stream.find({}).then(function(stream){
    //      res.send(stream);
    //  });

     Stream.geoNear(
         {type: "Point" ,coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]}, 
          {maxDistance: 100000, spherical: true}
            ).then(function(stream){ 
                res.send(stream);
        });
          
        
    
    
     // Stream.aggregate([
    //     {"$geoNear":{
    //         "near": {
    //             "type": "Point",
    //             "coordinates":[parseFloat(req.query.lng), parseFloat(req.query.lat)]
            
    //     },
    //     "distanceField": "distance",
    //     "maxDistance": 100000,
    //     "spherical": true,
    // }}

    // ]).then(function(err, results, next){
    //          res.send();
    //      }).catch(next);
    
});


// add to db
router.post('/stream', function(req, res, next) {
    //console.log(req.body);
    let stream = new Stream(req.body);
    // mongoose save method -- into db in stream.js //stream.save(); use create instead
    Stream.create(req.body).then(function(stream){
        res.send(stream);
    }).catch(next); 
});

// update to db
router.put('/stream/:id', function(req, res, next) {
    Stream.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        // send back stream that was updated as response with findOne/function
        Stream.findOne({_id: req.params.id}).then(function(stream){
            res.send(stream);
        });
    });
});

// delete info in db
router.delete('/stream/:id', function(req, res, next) {
    //console.log(req.params.id);
    Stream.findByIdAndRemove({_id: req.params.id}).then(function(stream){
        // send back stream that was remove as response
        res.send(stream);
    });
});

module.exports = router;
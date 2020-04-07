// get mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useNewUrlParser', true, 'useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


// create geolocation Schema to add to stream schema seperately/less nesting 
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});
// create stream Schema & model
const StreamSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    title: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    // add in geo location of Cast
    geometry: GeoSchema

});

// model collection of 'streams' a.k.a Cast for db --- Structure -> StreamSchema
const Stream = mongoose.model('stream', StreamSchema);

// export model for access in other files
module.exports = Stream 
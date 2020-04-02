// get mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
    // add in geo location of Cast

});

// model collection of 'streams' a.k.a Cast for db --- Structure -> StreamSchema
const Stream = mongoose.model('stream', StreamSchema);

// export model for access in other files
module.exports = Stream 
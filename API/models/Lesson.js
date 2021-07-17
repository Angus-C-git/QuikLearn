const mongoose = require('mongoose');

// DB Post schema
const postSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);
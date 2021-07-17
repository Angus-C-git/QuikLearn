const mongoose = require('mongoose');

// DB lesson schema
const lessonSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    author: {
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

module.exports = mongoose.model('Lesson', lessonSchema);
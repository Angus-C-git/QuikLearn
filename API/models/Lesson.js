const mongoose = require('mongoose');

// DB lesson schema
const lessonSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
        min: 3,
        max: 255,
        default: 'Topic'
    },
    title: {
        type: String,
        required: true,
        min: 1,
        max: 255,
        default: 'Foo Bar'
    },
    description: {
        type: String,
        min: 5,
        max: 800,
        default: 'This lesson is about ...'
    },
    author: {
        type: String,
        required: true,
        min: 3,
        max: 255,
        default: 'James'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Lesson', lessonSchema);
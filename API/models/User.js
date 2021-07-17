const mongoose = require('mongoose');
const Lesson = require('./Lesson');

/**
 * USER TABLE SCHEMA DEFINITION
 * */
const userSchema = new mongoose.Schema({
    usrName: {
        type: String,
        required: true,
        min: 6,
        max: 25
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    /* profile data fields*/
    level: {
        type: Number,
        default: 0
    },
    score: {
        type: Number,
        default: 0
    },
    completedLessons: [
        {
            lesson: {
                lesson_id: {
                    type: String
                },
                progress: {
                    type: Number,
                    default: 0
                },
                lastAccessed: {
                    type: Date,
                    default: Date.now
                }
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);

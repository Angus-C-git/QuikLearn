const router = require('express').Router();
const verify = require('./validateJWT');  // Authenticated route
const Lesson = require('../models/Lesson');


/**
 * Fetch all lessons
 * */
router.get('/', verify, async (req, res) => {
    try {
        const posts = await Lesson.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(503).json({error: err});
    }
});


/**
 * Share a lesson ...
 * */
router.post('/', verify, async (req, res) => {
    const lesson = new Lesson({
        author: req.body.author,
        topic: req.body.topic
        /*TODO*/
    });

    try {
        const savedLesson = await lesson.save();
        res.status(200).json(savedLesson);
    } catch (err) {
        res.status(503).json({error: err});
    }
});

module.exports = router;
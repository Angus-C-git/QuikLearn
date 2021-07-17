const router = require('express').Router();
const verify = require('./validateJWT');  // Authenticated route
const Lesson = require('../models/Lesson');


/**
 * Fetch all lessons <feed>
 * */
router.get('/', verify, async (req, res) => {
    try {
        const lessons = await Lesson.find();
        res.status(200).json(lessons);
    } catch (err) {
        res.status(503).json({error: err});
    }
});


/**
 * Fetch feed (shorter list)
 * */
 router.get('/feed', verify, async (req, res) => {
    try {
        const lessons = await Lesson.find().limit(4);
        res.status(200).json(lessons);
    } catch (err) {
        res.status(503).json({error: err});
    }
});


/**
 * Fetch upcoming live sessions
 * */
 router.get('/upcoming', verify, async (req, res) => {
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
        topic: req.body.topic,
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
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
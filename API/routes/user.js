const router = require('express').Router();
const verify = require('./validateJWT');  // Authenticated route
const Lesson = require('../models/Lesson');

/**
 * Fetch users recent lessons
 * */
 router.get('/recent', verify, async (req, res) => {
    try {
        const posts = await Lesson.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(503).json({error: err});
    }
});


/**
 * Fetch users profile
 * */
 router.get('/profile', verify, async (req, res) => {
    try {
        // TODO :: scrub pw (yes safe)
        const user = await User.find();
        res.status(200).json(user);
    } catch (err) {
        res.status(503).json({error: err});
    }
});
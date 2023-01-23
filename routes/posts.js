const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// ROUTES
// gets all the posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.json({ message: err });
    }
});

// get back a specific post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch(err) {
        res.json({ message: err });
    }
})

// submits a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err) {
        res.json({ message: err });
    }
});

// delete a specific post
router.delete('/:postId', async (req, res) => {
    try {
        const removed = await Post.deleteOne({ _id: req.params.postId });
        res.json(removed);
    } catch(err) {
        res.json({ message: err });
    }
});

// update a specific post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: {
                title: req.body.title,
                description: req.body.description
            } }
        );
        res.json(updatedPost);
    } catch(err) {
        res.json({ message: err });
    }
});

module.exports = router;
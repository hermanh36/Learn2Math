const express = require('express');
const router = express.Router();
const Comment = require('../../models/Comment');
const passport = require('passport');
const validateCommentInput = require('../../validation/comment');

router.get('/user/:userId',passport.authenticate('jwt', { session: false }), (req, res) => {
    Comment.find({userId: req.params.userId})
        .then(comments => res.json(comments))
        .catch(err => res.status(404).json({noCommentFound: 'No comments found under that user id'}))
});

router.get('/lesson/:lessonId',passport.authenticate('jwt', { session: false }), (req, res) => {
    Comment.find({lessonId: req.params.lessonId})
        .then(comments => res.json(comments))
        .catch(err => res.status(404).json({noCommentFound: 'No comments found under that lesson id'}))
});

router.post('/', passport.authenticate('jwt', { session: false }),(req, res) => {
    const {errors, isValid} = validateCommentInput(req.body);

    if (!isValid){
        return res.status(400).json(errors);
    }

    const newComment = new Comment({
        lessonId: req.body.lessonId,
        userId: req.user.id,
        message: req.body.message
    });

    newComment.save().then(comment => res.json(comment));
});

router.patch('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const {errors, isValid} = validateCommentInput(req.body);

    if (!isValid){
        return res.status(400).json(errors);
    }

    Comment.findByIdAndUpdate(req.params.id, {
        lessonId: req.body.lessonId,
        userId: req.user.id,
        message: req.body.message
    }, {new: true})
        .then(comment => {
            console.log(comment)
            return res.json(comment)})
        .catch(err => res.json(err))
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
        .then(() => res.json({message: 'Comment successfully deleted'}))
        .catch(() => res.json({message: 'Comment not found'}))
})

module.exports = router;
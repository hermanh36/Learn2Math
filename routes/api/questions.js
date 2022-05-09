const express = require("express");
const router = express.Router();
const Question = require('../../models/Question');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const newQuestion = new Question({
        quizId: req.body.quizId,
        title: req.body.title,
        content: req.body.content,
        answerChoices: req.body.answerChoices,
        correctAnswers: req.body.correctAnswers
    })

    newQuestion.save().then(question => res.json(question));
})

router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Question.findById(req.params.id)
        .then(question => {res.json(question)
        .catch(err => res.status(404).json({noquestionfound: 'No question found with that ID'}))
    })
})

router.patch('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const question = Question.findById(req.params.id)
        .then({
            title: req.body.title,
            content: req.body.content,
            answers: req.body.answers,
            correctAnswers: req.body.correctAnswers
        })
    question.save().then(question => res.json(question));
})

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Question.findByIdAndDelete(req.params.id)
        .then(() => res.json({message: 'Successfully deleted question'}))
        .catch(err => res.status(400).json(err))
})

module.exports = router;
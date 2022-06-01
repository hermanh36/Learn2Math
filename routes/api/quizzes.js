
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Question = require('../../models/Question');

const Quiz = require('../../models/Quiz');
const QuizScore = require('../../models/QuizScore');

router.get('/', (req, res) => {
  Quiz.find()
    .then(quiz => res.json(quiz))
    .catch(err => res.status(404).json({ noquizfound: 'No quizzes found' }));
});

router.get('/lesson/:lessonId', (req, res) => {
  Quiz.findOne({lessonId: req.params.lessonId})
    .then(quiz => res.json(quiz))
    .catch(err =>
      res.status(404).json({ noquizfound: 'No quizzes found with that lessonId' })
    );
});

router.get('/:id', (req, res) => {
  Quiz.findById(req.params.id)
    .then(quiz => res.json(quiz))
    .catch(err =>
      res.status(404).json({ noquizfound: 'No quizzes found with that id' })
    );
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newQuiz = new Quiz({
      lessonId: req.body.lessonId,
      studentId: req.user.id
    });

    newQuiz.save().then(quiz => res.json(quiz));
  }
);

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Quiz.findByIdAndDelete(req.params.id)
      .then(() => res.json({message: 'Successfully deleted quiz'}))
      .catch(err => res.status(400).json(err))
  }
);

module.exports = router;
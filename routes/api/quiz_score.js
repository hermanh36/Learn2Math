
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const QuizScore = require('../../models/QuizScore');

router.get('/', (req, res) => {
  QuizScore.find({userId: req.query.userId})
    .then(quizScore => res.json(quizScore))
    .catch(err => res.status(404).json({err}));
});

router.get('/:lessonId', (req, res) => {
  console.log(req.params.lessonId)
  Quiz.findOne({ lessonId: req.params.lessonId })
    .then(quiz => res.json(quiz))
    .catch(err =>
      res.status(404).json({ noquizfound: 'No quizzes found with that lessonId' })
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
      .then(() => res.json({ message: 'Successfully deleted quiz' }))
      .catch(err => res.status(400).json(err))
  }
);

module.exports = router;
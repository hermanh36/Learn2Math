
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

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newQuizScore = new QuizScore({
      quizId: req.body.quizId,
      studentId: req.user.id,
      score: req.body.score,
      lessonId: req.body.lessonId
    });

    newQuizScore.save().then(quizScore => res.json(quizScore));
  }
);

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    QuizScore.findByIdAndDelete(req.params.id)
      .then(() => res.json({ message: 'Successfully deleted quizScore' }))
      .catch(err => res.status(400).json(err))
  }
);

module.exports = router;
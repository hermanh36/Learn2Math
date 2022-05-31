
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Quiz = require('../../models/Quiz')
const Lesson = require('../../models/Lesson');
const validateLessonInput = require('../../validation/lessons');
const QuizScore = require('../../models/QuizScore');
const Question = require('../../models/Question');

router.get('/', (req, res) => {
  Lesson.find()
    .then(lessons => res.json(lessons))
    .catch(err => res.status(404).json({ nolessonsfound: 'No Lessons found' }));
});

router.get('/:id', (req, res) => {
  Lesson.findById(req.params.id)
    .then(lesson => res.json(lesson))
    .catch(err =>
      res.status(404).json({ nolessonfound: 'No lesson found with that ID' })
    );
});

router.get('/user/:authorId', (req, res)=> {
  Lesson.find({authorId: req.params.authorId})
    .then(lessons => res.json(lessons))
    .catch(err => res.status(400).json(err))
})

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateLessonInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newLesson = new Lesson({
      authorId: req.user.id,
      title: req.body.title,
      content: req.body.content,
      category: req.body.category
    });

    newLesson.save().then(lesson => res.json(lesson)).catch(err => res.json(err));
  }
);

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateLessonInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    await Lesson.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    content: req.body.content,
    category: req.body.category
    }, {new: true})
    .then(lesson => res.json(lesson))
    .catch(err => res.json(err))
  }
);

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    myQuizId = -1;
    Quiz.findOne({lessonId:req.params.id}, function(err, foundQuiz){
      if (err){
        throw err;
      } else {
        myQuizId = foundQuiz._id;
      }
    });
    Lesson.findByIdAndDelete(req.params.id)
    .then(() => Quiz.deleteMany({lessonId:req.params.id}))
    .then(() => QuizScore.deleteMany({quizId: myQuizId}))
    .then(() => Question.deleteMany({quizId: myQuizId}))
    .then(() => res.json({message:'Successfully deleted'}))
    .catch(() =>res.json({message:'Not Found'}))
  }
);

module.exports = router;
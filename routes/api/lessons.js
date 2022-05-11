
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Lesson = require('../../models/Lesson');
const validateLessonInput = require('../../validation/lessons');

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
    Lesson.findByIdAndDelete(req.params.id)
    .then(() => res.json({message:'Successfully deleted'}))
    .catch(() =>res.json({message:'Not Found'}))
  }
);

module.exports = router;
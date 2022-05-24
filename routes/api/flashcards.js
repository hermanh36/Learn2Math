const express = require("express");
const router = express.Router();
const Flashcard = require('../../models/Flashcard');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateFlashcardInput = require('../../validation/flashcard');


router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    console.log(req.query.studentId)
    Flashcard.find({ authorId: req.query.studentId })
        .then(flashcards => res.json(flashcards))
        .catch((err) => res.json(err))
})

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateFlashcardInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    
    const newFlashcard = new Flashcard({
        title: req.body.title,
        body: req.body.body,
        authorId: req.user.id
    })

    newFlashcard.save().then(flashcard => res.json(flashcard));
})

router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Flashcard.findById(req.params.id)
        .then(flashcard => res.json(flashcard))
        .catch(err => res.status(404).json({ noflashcardfound: 'No flashcard found with that ID' }))
        
})

router.patch('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { errors, isValid } = validateFlashcardInput(req.body);

    if (!isValid){
        return res.status(400).json(errors);
    }
    
    await Flashcard.findByIdAndUpdate(req.params.id,{
        title: req.body.title,
        body: req.body.body}, {new: true})
        .then(flashcard => res.json(flashcard))
        .catch(err => res.json(err))
    // Flashcard.findById(req.params.id).then(() => ({
    //     title: req.body.title,
    //     body: req.body.body
    // })).then(flashcard => res.json(flashcard))
})

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Flashcard.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: 'Successfully deleted flashcard' }))
        .catch(err => res.status(400).json(err))
})

module.exports = router;
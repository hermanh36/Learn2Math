const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateQuestionInput(data) {
    let errors = {};

    data.content = validText(data.content) ? data.content : '';
    data.correctAnswer = validText(data.correctAnswer) ? data.correctAnswer : '';
    data.answerChoices = data.answerChoices.map(answerChoice => validText(answerChoice) ? answerChoice : '');

    if (!Validator.isLength(data.content, { min: 3, max: 140 })) {
        errors.content = 'The question must be between 3 and 140 characters';
    }

    if (!Validator.isLength(data.correctAnswer, {max:140})){
        errors.correctAnswer = 'The correct answer field must be less than 140 characters';
    }

    if (Validator.isEmpty(data.correctAnswer)) {
        errors.correctAnswer = 'The correct answer field is required';
    }

    if (!data.answerChoices.every(answerChoice => answerChoice.length > 0)) {
        errors.answerChoices = 'All four answer choices must be filled'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}
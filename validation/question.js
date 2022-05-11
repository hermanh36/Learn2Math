const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateQuestionInput(data){
    let errors = {};

    data.content = validText(data.content) ? data.content : '';
    data.correctAnswer = validText(data.correctAnswer) ? data.correctAnswer : '';
    
    if (!Validator.isLength(data.content, {min: 3, max: 140})){
        errors.content = 'Content must be between 5 and 140 characters';
    }

    if (!Validator.isLength(data.correctAnswer, {min: 1, max: 140})){
        errors.correctAnswer = 'The correct answer must be between 1 and 140 characters';
    }

    if (!Array.isArray(data.answerChoices) || data.answerChoices.length !== 4){
        errors.answerChoices = 'The answer choices must be be an array with four choices';
    }

    return {
        errors,
        isValid: Object.keys(errors).length===0
    }
}
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateFlashcardInput(data){
    let errors = {};

    data.title = validText(data.title) ? data.title : '';
    data.body = validText(data.body) ? data.body : '';

    if (!Validator.isLength(data.title,{min: 3, max: 140})){
        errors.title = 'Word must be between 3 and 140 characters';
    }

    if (!Validator.isLength(data.body,{min:5, max: 140})){
        errors.body = 'Definition must be between 5 and 140 characters';
    }

    if (Validator.isEmpty(data.title)){
        errors.title = 'Word field is required';
    }

    if (Validator.isEmpty(data.body)){
        errors.body = 'Definition field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}
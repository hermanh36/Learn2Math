const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLessonInput(data) {
  let errors = {};

  data.content = validText(data.content) ? data.content : '';

  if (!Validator.isLength(data.content, { min: 5, max: 140 })) {
    errors.content = 'Lesson must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.content)) {
    errors.content = 'Content field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLessonInput(data) {
  let errors = {};

  data.content = validText(data.content) ? data.content : '';
  data.title = validText(data.title) ? data.title : '';

  if (!Validator.isLength(data.content, { min: 5 })) {
    errors.content = 'Lesson must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.content)) {
    errors.content = 'Content field is required';
  }

  if (!Validator.isLength(data.title, { min: 5, max: 140 })) {
    errors.title = 'Lesson title must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
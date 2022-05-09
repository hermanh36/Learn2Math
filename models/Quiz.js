const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  lessonId: {
    type: Number,
    required: true
  },
  studentId: {
    type: Number,
  }
}, {
  timestamps: true
})

module.exports = User = mongoose.model('Quiz', QuizSchema);
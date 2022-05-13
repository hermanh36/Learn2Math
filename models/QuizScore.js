const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizScoreSchema = new Schema({
  quizId: {
    type: Schema.Types.ObjectId,
    ref: 'quiz'
  },
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  score: {
    type: Number,
    required: true
  },
  lessonId: {
    type: Schema.Types.ObjectId,
    required: true
  }
}, {
  timestamps: true
})

module.exports = QuizScore = mongoose.model('QuizScore', QuizScoreSchema);
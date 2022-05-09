const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  lessonId: {
    type: Schema.Types.ObjectId,
    ref: 'lessons'
  },
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
}, {
  timestamps: true
})

module.exports = User = mongoose.model('Quiz', QuizSchema);
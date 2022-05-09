const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
  authorId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: Text,
    required: true
  }
}, {
  timestamps: true
})

module.exports = User = mongoose.model('Lesson', LessonSchema);
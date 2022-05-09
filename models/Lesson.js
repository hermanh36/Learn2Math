const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
  authorId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
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

module.exports = Lesson = mongoose.model('Lesson', LessonSchema);
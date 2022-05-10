const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
  authorId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  content: {
    type: String,
    required: true
  }, 
  category: {
    type: String, 
    required: true
  }
}, {
  timestamps: true
})

module.exports = Lesson = mongoose.model('Lesson', LessonSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    quizId: {
        type: Schema.Types.ObjectId,
        ref: 'quiz'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    answerChoices: {
        type: Array,
        required: true
    },
    correctAnswer: {
        type: Number,
        required: true
    }
})

module.exports = Question = mongoose.model('Question', QuestionSchema);
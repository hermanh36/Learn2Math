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
        type: Array,
        required: true
    },
    answerChoices: {
        type: Array,
        required: true
    },
    correctAnswers: {
        type: Array,
        required: true
    }
})

module.exports = Question = mongoose.model('Question', QuestionSchema);
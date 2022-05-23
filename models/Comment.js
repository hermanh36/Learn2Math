const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    lessonId: {
        type: Schema.Types.ObjectId,
        ref: 'lessons'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    message: {
        type: String,
        required: true
    }},
    {timestamps: true
})

module.exports = Comment = mongoose.model('Comment', CommentSchema);
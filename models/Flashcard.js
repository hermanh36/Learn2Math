const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlashcardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }}, 
    {timestamps: true
})

module.exports = Flashcard = mongoose.model('Flashcard', FlashcardSchema);
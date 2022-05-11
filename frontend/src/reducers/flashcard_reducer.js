import {
    RECEIVE_FLASHCARD,
    RECEIVE_FLASHCARDS,
    REMOVE_FLASHCARD
} from '../actions/flashcard_actions';

const FlashcardReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_FLASHCARD:
            nextState[action.flashcard._id]=action.flashcard;
            return nextState;
        case RECEIVE_FLASHCARDS:
            Object.values(action.flashcards).forEach(flashcard => {
                nextState[flashcard._id] = flashcard
            })
            return nextState;
        case REMOVE_FLASHCARD:
            delete nextState[action.flashcardId];
            return nextState;
        default:
            return state;
    }
}

export default FlashcardReducer;
import { RECEIVE_FLASHCARD, RECEIVE_FLASHCARD_ERRORS } from "../actions/flashcard_actions"

const FlashcardErrorsReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_FLASHCARD_ERRORS:
            return action.errors;
        case RECEIVE_FLASHCARD:
            return [];
        default:
            return state;
    }
}

export default FlashcardErrorsReducer;
import * as FlashcardAPIUtil from '../util/flashcard_api_util';
export const RECEIVE_FLASHCARDS = 'RECEIVE_FLASHCARDS';
export const RECEIVE_FLASHCARD = 'RECEIVE_FLASHCARD';
export const REMOVE_FLASHCARD = 'REMOVE_FLASHCARD';
export const RECEIVE_FLASHCARD_ERRORS = 'RECEIVE_FLASHCARD_ERRORS';

const receiveFlashcards = (flashcards) => {
    return {
        type: RECEIVE_FLASHCARDS,
        flashcards: flashcards.data
    }
};

const receiveFlashcard = flashcard => {
    return {
        type: RECEIVE_FLASHCARD,
        flashcard: flashcard.data
    }
};

const removeFlashcard = flashcardId => {
    return {
        type: REMOVE_FLASHCARD,
        flashcardId
    }
};

const receiveFlashcardErrors = errors => {
    return {
        type: RECEIVE_FLASHCARD_ERRORS,
        errors: errors.response.data
    }
}

export const fetchFlashcards = studentId => dispatch => {
    return FlashcardAPIUtil.fetchFlashcards(studentId)
        .then(flashcards => dispatch(receiveFlashcards(flashcards)))
        .catch(err => dispatch(receiveFlashcardErrors(err)))
};

export const fetchFlashcard = flashcardId => dispatch => {
    return FlashcardAPIUtil.fetchFlashcard(flashcardId)
        .then(flashcard => dispatch(receiveFlashcard(flashcard)))
        .catch(err => dispatch(receiveFlashcardErrors(err)))
};

export const createFlashcard = flashcard => dispatch => {
    return FlashcardAPIUtil.createFlashcard(flashcard)
        .then(flashcard => dispatch(receiveFlashcard(flashcard)))
        .catch(err => dispatch(receiveFlashcardErrors(err)))
};

export const updateFlashcard = flashcard => dispatch => {
    return FlashcardAPIUtil.updateFlashcard(flashcard)
        .then(flashcard => dispatch(receiveFlashcard(flashcard)))
        .catch(err => dispatch(receiveFlashcardErrors(err)))
};

export const deleteFlashcard = flashcardId => dispatch => {
    return FlashcardAPIUtil.deleteFlashcard(flashcardId)
        .then(() => dispatch(removeFlashcard(flashcardId)))
        .catch(err => dispatch(receiveFlashcardErrors(err)))
}
import axios from 'axios';

export const fetchFlashcards = () => {
    return axios.get('/api/flashcards')
};

export const createFlashcard = flashcard => {
    return axios.post('/api/flashcards', flashcard)
};

export const fetchFlashcard = id => {
    return axios.get(`/api/flashcards/${id}`)
};

export const updateFlashcard = flashcard => {
    return axios.patch(`/api/flashcards/${flashcard._id}`, flashcard)
};

export const deleteFlashcard = id => {
    return axios.delete(`/api/flashcards/${id}`)
};
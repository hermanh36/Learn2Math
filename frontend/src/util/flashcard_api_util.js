import axios from 'axios';

export const getFlashcards = () => {
    return axios.get('/api/flashcards')
};

export const createFlashcard = flashcard => {
    return axios.post('/api/flashcards', flashcard)
};

export const getFlashcard = id => {
    return axios.get(`/api/flashcards/${id}`)
};

export const updateFlashcard = flashcard => {
    return axios.patch(`/api/flashcards/${flashcard.id}`, flashcard)
};

export const deleteFlashcard = id => {
    return axios.delete(`/api/flashcards/${id}`)
};
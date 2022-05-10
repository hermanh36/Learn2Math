import axios from 'axios';

export const fetchQuestions = () => {
    return axios.get('/api/questions')
};

export const fetchQuestion = questionId => {
    return axios.get(`/api/questions/${questionId}`)
};

export const createQuestion = question => {
    return axios.post('/api/questions', question)
};

export const updateQuestion = question => {
    return axios.patch(`/api/questions/${question.id}`, question)
};

export const deleteQuestion = questionId => {
    return axios.delete(`/api/questions/${questionId}`)
};
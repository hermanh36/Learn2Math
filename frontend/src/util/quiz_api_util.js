import axios from 'axios'

export const fetchQuizzes = () => {
  return axios.get('/api/quizzes')
};

export const fetchQuiz = quizId => {
  return axios.get(`/api/quizzes/${quizId}`)
};

export const createQuiz = quiz => {
  return axios.post('/api/quizzes/', quiz)
};

export const updateQuiz = quiz => {
  return axios.patch(`/api/quizzes/${quiz.id}`, quiz)
};

export const deleteQuiz = quizId => {
  return axios.delete(`/api/quizzes/${quizId}`)
}
import axios from 'axios'

export const fetchQuizScores = (userId) => {
  return axios.get('/api/quizscore')
}

export const createQuizScore = quiz => {
  return axios.post('/api/quiz')
}
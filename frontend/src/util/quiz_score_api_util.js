import axios from 'axios'

export const fetchQuizScores = (userId) => {
  return axios.get('/api/quizscores', {
    params: {
      userId: userId
    }
  }) 
};

export const fetchQuizScore = (lessonId) => {
  return axios.get(`/api/quizscores/${lessonId}`)
};

export const createQuizScore = quiz => {
  return axios.post('/api/quizscores', quiz)
};

// export const deleteQuizScore = quizId => {
//   return axios.delete(`/api/quizscores/${quizId}`)
// };
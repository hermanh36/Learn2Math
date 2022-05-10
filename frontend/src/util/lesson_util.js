import axios from 'axios'

export const fetchLessons = () => {
  return axios.get('/api/lessons')
};

export const fetchLesson = lessonId => {
  return axios.get(`/api/lessons/${lessonId}`)
};

export const createLesson = lesson => {
  return axios.post('/api/lessons/', lesson)
};

export const updateLesson = lesson => {
  return axios.patch(`/api/lessons/${lesson.id}`, lesson)
};

export const deleteLesson = lessonId => {
  return axios.delete(`/api/lessons/${lessonId}`)
}
import axios from 'axios';

export const fetchCommentsByUser = userId => {
    return axios.get(`/api/comments/user/${userId}`)
};

export const fetchCommentsByLesson = lessonId => {
    return axios.get(`/api/comments/lesson/${lessonId}`)
};

export const createComment = comment => {
    return axios.post('/api/comments/', comment)
};

export const updateComment = comment => {
    return axios.patch(`/api/comments/${comment._id}`, comment)
};

export const deleteComment = commentId => {
    return axios.delete(`/api/comments/${commentId}`)
};
import * as CommentAPIUtil from '../util/comment_api_util';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_COMMENT_ERRORS = 'CLEAR COMMENT_ERRORS';

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments: comments.data
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment: comment.data
});

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors: errors.response.data
});

const emptyCommentErrors = () => ({
    type: CLEAR_COMMENT_ERRORS
})

export const fetchCommentsByLesson = lessonId => dispatch => {
    return CommentAPIUtil.fetchCommentsByLesson(lessonId)
        .then(comments => dispatch(receiveComments(comments)))
        .catch(err => dispatch(receiveCommentErrors(err)))
};

export const fetchCommentsByUser = userId => dispatch => {
    return CommentAPIUtil.fetchCommentsByUser(userId)
        .then(comments => dispatch(receiveComments(comments)))
        .catch(err => dispatch(receiveCommentErrors(err)))
};

export const createComment = comment => dispatch => {
    return CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
        .catch(err => dispatch(receiveCommentErrors(err)))
};

export const updateComment = comment => dispatch => {
    return CommentAPIUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
        .catch(err => dispatch(receiveCommentErrors(err)))
};

export const deleteComment = commentId => dispatch => {
    return CommentAPIUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
        .catch(err => dispatch(receiveCommentErrors(err)))
};

export const clearCommentErrors = () => dispatch => {
    return dispatch(emptyCommentErrors());
}
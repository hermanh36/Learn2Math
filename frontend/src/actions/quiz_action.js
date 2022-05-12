import * as quizUtil from '../util/quiz_api_util';

export const RECEIVE_QUIZZES = 'RECEIVE_QUIZZES';
export const RECEIVE_QUIZ = 'RECEIVE_QUIZ';
export const REMOVE_QUIZ = 'REMOVE_QUIZ';
export const RECEIVE_QUIZ_ERRORS = 'RECEIVE_QUIZ_ERRORS';

export const receiveQuizzes = quizzes => {
  return {
    type: RECEIVE_QUIZZES,
    quizzes: quizzes.data
  }
}

export const receiveQuiz = quiz => {
  return {
    type: RECEIVE_QUIZ,
    quiz: quiz.data
  }
}

export const removeQuiz = quizId => {
  return {
    type: REMOVE_QUIZ,
    quizId
  }
}

export const receiveQuizError = errors => {
  return {
    type: RECEIVE_QUIZ_ERRORS,
    errors: errors.response.data
  }
}

export const fetchQuizzes = () => dispatch => {
  return (
    quizUtil.fetchQuizzes()
    .then(quizzes => dispatch(receiveQuizzes(quizzes)))
    .catch(err => dispatch(receiveQuizError(err)))
  )
};

export const fetchQuiz = (quiz) => dispatch => {
  return (
    quizUtil.fetchQuiz(quiz)
      .then(quiz => dispatch(receiveQuiz(quiz)))
      .catch(err => dispatch(receiveQuizError(err)))
  )
};

export const createQuiz = quiz => dispatch => {
  return (
    quizUtil.createQuiz(quiz)
    .then(quiz => dispatch(receiveQuiz(quiz)))
    .catch(err => dispatch(receiveQuizError(err)))
  )
}

export const updateQuiz = quiz => dispatch => {
  return (
    quizUtil.updateQuiz(quiz)
    .then(quiz => dispatch(receiveQuiz(quiz)))
    .catch(err => dispatch(receiveQuizError(err)))
  )
};

export const deleteQuiz = quizId => dispatch => {
  return (
    quizUtil.deleteQuiz(quizId)
    .then(() => dispatch(removeQuiz(quizId)))
    .catch(err => receiveQuizError(err))
  )
}


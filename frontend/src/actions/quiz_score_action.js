import * as quizScoreUtil from '../util/quiz_score_api_util'

export const RECEIVE_MY_SCORES = 'RECEIVE_MY_SCORES'
export const RECEIVE_SCORE_ERRORS = 'RECEIVE_SCORE_ERRORS'
export const RECEIVE_SCORE = 'RECEIVE_SCORE'

export const receiveQuizScores = scores => {
  return {
    type: RECEIVE_MY_SCORES,
    scores: scores.data
  }
};

export const receiveScoreErrors = errors => {
  return {
    type: RECEIVE_SCORE_ERRORS,
    errors: errors.response.data
  }
};

export const receiveQuizScore = score => {
  return {
    type: RECEIVE_SCORE,
    score: score.data
  }
};


export const fetchScores = userId => dispatch => {
  return(
    quizScoreUtil.fetchQuizScores(userId)
    .then(scores => dispatch(receiveQuizScores(scores)))
    .catch(err => dispatch(receiveScoreErrors(err)))
  )
};

export const createScore = quizScore => dispatch => {
  return (
    quizScoreUtil.createQuizScore(quizScore)
    .then(score => dispatch(receiveQuizScore(score)))
    .catch(err => dispatch(receiveScoreErrors(err)))
  )
};

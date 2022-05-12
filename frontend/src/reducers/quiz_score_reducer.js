import { RECEIVE_MY_SCORES, RECEIVE_SCORE } from "../actions/quiz_score_action";

const QuizScoreReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({},state);
  switch (action.type) {
    case RECEIVE_MY_SCORES:
      Object.values(action.scores).forEach(score => {
        console.log(score);
        nextState[score._id] = score
      })
      return nextState;
    case RECEIVE_SCORE: 
      nextState[action.score._id] = action.score
      return nextState
    default:
      return state;
  }
}

export default QuizScoreReducer;
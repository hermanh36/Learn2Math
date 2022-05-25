import { RECEIVE_MY_SCORES, RECEIVE_SCORE } from "../actions/quiz_score_action";
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const QuizScoreReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({},state);
  switch (action.type) {
    case RECEIVE_MY_SCORES:
      nextState = {};
      Object.values(action.scores).forEach(score => {
        nextState[score._id] = score
      })
      return nextState;
    case RECEIVE_SCORE: 
      nextState[action.score._id] = action.score
      return nextState
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return state;
  }
}

export default QuizScoreReducer;
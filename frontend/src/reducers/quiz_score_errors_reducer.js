import { RECEIVE_SCORE, RECEIVE_SCORE_ERRORS } from "../actions/quiz_score_action";

const QuizScoreErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SCORE_ERRORS:
      return action.errors;
    case RECEIVE_SCORE:
      return [];
    default:
      return state;
  }
}

export default QuizScoreErrorReducer;
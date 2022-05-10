import { RECEIVE_QUIZ, RECEIVE_QUIZ_ERRORS } from "../actions/quiz_action";

const QuizErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUIZ_ERRORS:
      return action.errors;
    case RECEIVE_QUIZ:
      return [];
    default:
      return state;
  }
}

export default QuizErrorReducer;
import {RECEIVE_LESSON, RECEIVE_LESSON_ERRORS} 
from "../actions/lesson_actions"

const LessonErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LESSON_ERRORS:
      return action.errors;
    case RECEIVE_LESSON:
      return [];
    default:
      return state;
  }
}

export default LessonErrorReducer
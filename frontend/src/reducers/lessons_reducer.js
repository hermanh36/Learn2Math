import { RECEIVE_LESSONS, RECEIVE_LESSON, REMOVE_LESSON, RESET_LESSON } 
from "../actions/lesson_actions";

const LessonsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({},state);
  switch(action.type) {
    case RECEIVE_LESSONS:
      newState = {};
      Object.values(action.lessons).forEach(lesson => {
        newState[lesson._id] = lesson
      })
      return newState
    case RECEIVE_LESSON:
      newState[action.lesson._id] = action.lesson
      return newState;
    case REMOVE_LESSON:
      delete newState[action.lessonId]
      return newState;
    case RESET_LESSON:
      return {};
    default:
      return state;
  }
}

export default LessonsReducer;
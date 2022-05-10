import { RECEIVE_LESSONS, RECEIVE_LESSON, REMOVE_LESSON } 
from "../actions/lession_actions";

const LessonsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({},state);
  switch(action.type) {
    case RECEIVE_LESSONS:
      newState = Object.values(action.lessons)
      return newState
    case RECEIVE_LESSON:
      newState[action.lesson.id] = action.lesson
      return newState;
    case REMOVE_LESSON:
      delete newState[action.lessonId]
      return newState;
    default:
      return state;
  }
}

export default LessonsReducer;
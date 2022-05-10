import {combineReducers} from 'redux';
import LessonsReducer from './lessons_reducer';
import QuestionReducer from './question_reducer';

const EntitiesReducer = combineReducers({
    questions: QuestionReducer,
    lessons: LessonsReducer
})

export default EntitiesReducer;
import {combineReducers} from 'redux';
import QuestionReducer from './question_reducer';

const EntitiesReducer = combineReducers({
    questions: QuestionReducer
})

export default EntitiesReducer;
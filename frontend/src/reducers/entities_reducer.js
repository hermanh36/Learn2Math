import {combineReducers} from 'redux';
import LessonsReducer from './lessons_reducer';
import QuestionReducer from './question_reducer';
import QuizReducer from './quiz_reducer';

const EntitiesReducer = combineReducers({
    questions: QuestionReducer,
    lessons: LessonsReducer,
    quizzes: QuizReducer,
    flashcards:
})

export default EntitiesReducer;
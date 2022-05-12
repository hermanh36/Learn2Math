import {combineReducers} from 'redux';
import LessonsReducer from './lessons_reducer';
import QuestionReducer from './question_reducer';
import QuizReducer from './quiz_reducer';
import FlashcardReducer from './flashcard_reducer';
import QuizScoreReducer from './quiz_score_reducer';
import UserReducer from './users_reducer';

const EntitiesReducer = combineReducers({
    questions: QuestionReducer,
    lessons: LessonsReducer,
    quizzes: QuizReducer,
    flashcards: FlashcardReducer,
    quizScores: QuizScoreReducer,
    users: UserReducer
})

export default EntitiesReducer;
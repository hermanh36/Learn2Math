// src/reducers/errors_reducer.js

import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import QuestionErrorsReducer from './question_errors_reducer';
import LessonErrorReducer from './lesson_errors_reducer';
import QuizErrorReducer from './quiz_errors_reducer';
import FlashcardErrorsReducer from './flashcard_errors_reducer';
<<<<<<< HEAD
import QuizScoreErrorReducer from './quiz_score_errors_reducer';
=======
import UserErrorReducer from './user_errors_reducer';
>>>>>>> a839cb261add96cedcd032c7a7c502ff0f89b8d0

export default combineReducers({
  session: SessionErrorsReducer,
  question: QuestionErrorsReducer,
  lesson: LessonErrorReducer,
  quiz: QuizErrorReducer,
  flashcard: FlashcardErrorsReducer,
<<<<<<< HEAD
  quizscore: QuizScoreErrorReducer
=======
  user: UserErrorReducer
>>>>>>> a839cb261add96cedcd032c7a7c502ff0f89b8d0
});
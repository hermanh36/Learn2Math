// src/reducers/errors_reducer.js

import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import QuestionErrorsReducer from './question_errors_reducer';
import LessonErrorReducer from './lesson_errors_reducer';
import QuizErrorReducer from './quiz_errors_reducer';
import FlashcardErrorsReducer from './flashcard_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  question: QuestionErrorsReducer,
  lesson: LessonErrorReducer,
  quiz: QuizErrorReducer,
  flashcard: FlashcardErrorsReducer
});
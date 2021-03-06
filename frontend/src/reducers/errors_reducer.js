// src/reducers/errors_reducer.js
import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import QuestionErrorsReducer from './question_errors_reducer';
import LessonErrorReducer from './lesson_errors_reducer';
import QuizErrorReducer from './quiz_errors_reducer';
import FlashcardErrorsReducer from './flashcard_errors_reducer';
import QuizScoreErrorReducer from './quiz_score_errors_reducer';
import UserErrorReducer from './user_errors_reducer';
import CommentCreateErrorReducer from './comments_create_error_reducer';
import CommentUpdateErrorReducer from './comments_update_error_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  question: QuestionErrorsReducer,
  lesson: LessonErrorReducer,
  quiz: QuizErrorReducer,
  flashcard: FlashcardErrorsReducer,
  quizscore: QuizScoreErrorReducer,
  user: UserErrorReducer,
  commentCreate: CommentCreateErrorReducer,
  commentUpdate: CommentUpdateErrorReducer
});
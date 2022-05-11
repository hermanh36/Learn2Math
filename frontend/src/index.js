import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import * as lessonAction from './actions/lesson_actions';
import * as QuestionAction from './actions/question_actions'
import * as FlashcardAction from './actions/flashcard_actions';

import * as QuizAction from './actions/quiz_action';

window.axios = axios;

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.fetchLesson = lessonAction.fetchLesson;
  window.fetchLessons = lessonAction.fetchLessons;
  window.createLesson = lessonAction.createLesson;
  window.updateLesson = lessonAction.updateLesson;
  window.deleteLesson = lessonAction.deleteLesson;
  window.fetchQuestion = QuestionAction.fetchQuestion;
  window.fetchQuestions = QuestionAction.fetchQuestions;
  window.createQuestion = QuestionAction.createQuestion;
  window.updateQuestion = QuestionAction.updateQuestion;
  window.deleteQuestion = QuestionAction.deleteQuestion;

  window.fetchQuizzes = QuizAction.fetchQuizzes;
  window.fetchQuiz = QuizAction.fetchQuiz;
  window.createQuiz = QuizAction.createQuiz;
  // window.updateQuiz = QuizAction.updateQuiz;
  window.deleteQuiz = QuizAction.deleteQuiz;


  window.fetchFlashcards = FlashcardAction.fetchFlashcards;
  window.fetchFlashcard = FlashcardAction.fetchFlashcard;
  window.removeFlashcard = FlashcardAction.deleteFlashcard;
  window.updateFlashcard = FlashcardAction.updateFlashcard;
  window.createFlashcard = FlashcardAction.createFlashcard;
  

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});
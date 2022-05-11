// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import { Route } from 'react-router-dom';
import TweetsContainer from './tweets/tweets_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import TweetComposeContainer from './tweets/tweet_compose_container';
import CategoryIndexContainer from './category/category_index_container';
import LeftSidebar from './left_sidebar/left_sidebar';
import NewQuestionFormContainer from './question/new_question_form_container';
import QuestionIndexContainer from './question/question_index_container';
// import QuestionManager from './question/question_manager';
import CreateLessonContainer from './lessons/create_lesson_container';
import EditLessonContainer from './lessons/edit_lesson_container';
import QuizItemContainer from './quiz/quiz_item_container';
import ShowLessonContainer from './lessons/lesson_show_container';

const App = () => (
  <div className="app-wrap">
    <NavBarContainer />
    {/* <LeftSidebar /> */}
      <Route exact path='/quiz/:quizId/question' component={QuestionIndexContainer} />
      <Route exact path='/quiz/:quizId/question' component={NewQuestionFormContainer} />

    <Switch>
      <Route exact path = '/lesson/new' component={CreateLessonContainer} />
      <Route exact path='/lesson/:lessonId/edit' component={EditLessonContainer} />
      <Route exact path='/lesson/:lessonId' component={ShowLessonContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path='/quiz/:quizId' component={QuizItemContainer} />
      <ProtectedRoute exact path="/categories" component={CategoryIndexContainer} />

      <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/new_tweet" component={TweetComposeContainer} />
      <AuthRoute exact path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;
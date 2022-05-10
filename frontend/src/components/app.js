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
import CreateLessonContainer from './lessons/create_lesson_container';
import CategoryIndexContainer from './category/category_index_container';
import LeftSidebar from './left_sidebar/left_sidebar';
import NewQuestionFormContainer from './question/new_question_form_container';
import QuizIndexContainer from './quiz/quiz_index_container';

const App = () => (
  <div className="app-wrap">
    <NavBarContainer />
    {/* <LeftSidebar /> */}
    <Switch>
      <Route exact path='/quiz/:quizId/question' component={NewQuestionFormContainer} />
      <Route exact path = "/createlessontest" component={CreateLessonContainer} />
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path='/quiz/' component={QuizIndexContainer} />

      <ProtectedRoute exact path="/categories" component={CategoryIndexContainer} />
      <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/new_tweet" component={TweetComposeContainer} />
    </Switch>
  </div>
);

export default App;
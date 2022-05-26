import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import { Route } from 'react-router-dom';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import CategoryIndexContainer from './category/category_index_container';
import NewQuestionFormContainer from './question/new_question_form_container';
import QuestionIndexContainer from './question/question_index_container';
import QuestionErrorContainer from './question/question_error_container';
import CreateFlashcardsContainer from './flashcards/create_flashcards_container'
import EditFlashcardsContainer from './flashcards/edit_flashcards_container'
import CreateLessonContainer from './lessons/create_lesson_container';
import EditLessonContainer from './lessons/edit_lesson_container';
import QuizItemContainer from './quiz/quiz_item_container';
import ShowLessonContainer from './lessons/lesson_show_container';
import MyQuizScores from './profile/my_score_container'
import FlashcardIndexContainer from './flashcards/flashcard_index_container';
import ProfileContainer from './profile/profile_container';
import AboutUs from './about_us/about_us'; 


const App = () => (
  <div className="app-wrap">
    <Route path="/" component={NavBarContainer} />

    <AboutUs />
      <Route exact path='/hehe' component={AboutUs} />
      <ProtectedRoute exact path='/myquiz' component={MyQuizScores}/>
      <ProtectedRoute exact path='/createflashcard' component={CreateFlashcardsContainer}/>
      <ProtectedRoute exact path='/:flashcardId/edit' component={EditFlashcardsContainer}/>
      <ProtectedRoute exact path='/quiz/:quizId/edit' component={QuestionErrorContainer} />
      <ProtectedRoute exact path='/quiz/:quizId/edit' component={QuestionIndexContainer} />
      <ProtectedRoute exact path='/quiz/:quizId/edit' component={NewQuestionFormContainer} />
    <Switch>
      <ProtectedRoute path={`/profile/:userId/flashcards`} component={FlashcardIndexContainer} />
      <ProtectedRoute path={`/profile/:userId`} component={ProfileContainer} />
      <ProtectedRoute exact path = '/lesson/new' component={CreateLessonContainer} />
      <ProtectedRoute exact path='/lesson/:lessonId/edit' component={EditLessonContainer} />
      <ProtectedRoute exact path='/lesson/:lessonId' component={ShowLessonContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path='/quiz/:quizId' component={QuizItemContainer} />
      
      <ProtectedRoute exact path="/categories" component={CategoryIndexContainer} />
      <AuthRoute exact path="/" component={MainPage} />
    </Switch>
    
  </div>
);

export default App;
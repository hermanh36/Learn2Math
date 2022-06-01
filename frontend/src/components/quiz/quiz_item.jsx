import React from 'react';
import QuestionItemContainer from '../question/question_item_container';
import QuizScore from './quiz_score';
import { withRouter } from 'react-router-dom';
import LeftSidebar from '../left_sidebar/left_sidebar_container';

class QuizItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { score: 0,
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.total = 0;
    this.lessonId = 0;
  }
  //assume props have lessonId

  componentDidMount() {
    debugger;
    // this.props.fetchQuestions(this.props.quizId)
    // .then(() => this.props.fetchQuiz(this.props.quizId))
    // .then(quiz => this.lessonId = quiz.quiz.lessonId)
    this.props.fetchQuiz(this.props.quizId).then(quiz => console.log(quiz))
    this.props.fetchQuestions(this.props.quizId)
  }

  submitHandler() {
    debugger;
    let quizButton = document.getElementById('quiz-submit');
    quizButton.classList.toggle('hidden-button')
    let quizConfirm = document.getElementById('quiz-score-wrap');
    quizConfirm.classList.toggle('hide');
    let correctAnswers = document.getElementsByClassName('correct-answer');
    for( let i=0; i<correctAnswers.length; i++) {
      correctAnswers[i].classList.toggle('hide');
    }
    let correctAnswer = [];
    let submittedAnswer = [];
    let score = 0;
    this.total = this.props.questions.length;
    this.props.questions.forEach(question => {
      correctAnswer.push(question.correctAnswer);
      let currentInput = document.querySelector(`input[name='answer${question._id}']:checked`) 
      ? document.querySelector(`input[name='answer${question._id}']:checked`).value
      : 'empty';
      submittedAnswer.push(currentInput);
    });
    correctAnswer.forEach((answer,index) => {
      if (answer === submittedAnswer[index]){
        score += 1;
        this.setState(( () => (
          { score: score })
        ))
      }
    })
    this.props.createQuizScore(
      {
        studentId: this.props.currentUser,
        score: score,
        quizId: this.props.quizId,
        lessonId: this.props.quizzes[this.props.quizId].lessonId
      }
    )
  }

  render() {
    if (!this.props.questions){
      return (
        <div className="quiz-wrap">
          <LeftSidebar />
        </div>
      )
    } else {
      return (
        <div className="quiz-wrap">
          <LeftSidebar />
          <div className="quiz-inner-wrap"> 
            <h1 className="quiz-header">Quiz</h1>
            <ul className="quiz-question-list">
              {this.props.questions.map(question => <QuestionItemContainer question={question} key={question._id}/>)}
            </ul>
            <div className="submit-quiz-btn-wrap">
              <button id='quiz-submit' className="submit-quiz-btn" onClick={this.submitHandler}>Submit</button>
            </div>
            <QuizScore history={this.props.history} currentUserId={this.props.currentUser} score={this.state.score} total={this.total} />
          </div>
        </div>
      )
    }
  }
}

export default withRouter(QuizItem);
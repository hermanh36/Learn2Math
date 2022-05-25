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
    this.props.fetchQuestions(this.props.quizId)
    .then(() => this.props.fetchQuiz(this.props.quizId))
    .then(quiz => this.lessonId = quiz.quiz.lessonId)
  }

  submitHandler() {
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
        lessonId: this.lessonId
      }
    )
  }

  render() {
    if (!this.props.questions){
      return <LeftSidebar />;
    } else {
      return (
        <div>
          <LeftSidebar />
          <div> 
            <h1>Quiz</h1>
            <ul>
              {this.props.questions.map(question => <QuestionItemContainer question={question}/>)}
            </ul>
          </div>
          <button onClick={this.submitHandler}>Submit</button>
          <QuizScore score={this.state.score} total={this.total} />
        </div>
      )
    }
  }
}

export default withRouter(QuizItem);
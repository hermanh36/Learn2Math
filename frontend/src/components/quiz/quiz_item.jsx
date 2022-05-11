import React from 'react';
import QuestionItemContainer from '../question/question_item_container';

class QuizItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { questions : [] };
    this.submitHandler = this.submitHandler.bind(this);
  }
  //assume props have lessonId

  componentDidMount() {
    this.props.fetchQuestions(this.props.quizId)
  }

  submitHandler() {
    let correctAnswer = [];
    let submittedAnswer = [];
    let score = 0;
    const total = this.props.questions.length;
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
      }
    })
    console.log(score);
  }

  render() {
    if (!this.props.questions){
      return null;
    } else {
      return (
        <div>
          <div> 
            <h1>Quiz</h1>
            <ul>
              {this.props.questions.map(question => <QuestionItemContainer question={question}/>)}
            </ul>
          </div>
          <button onClick={this.submitHandler}>Submit</button>
        </div>
      )
    }
  }
}

export default QuizItem;
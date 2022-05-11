import React from 'react';
import QuestionItemContainer from '../question/question_item_container';

class QuizItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { questions : [] };
  }
  //assume props have lessonId

  componentDidMount() {
    this.props.fetchQuestions(this.props.quizId)
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
          
        </div>
      )
    }
  }
}

export default QuizItem;
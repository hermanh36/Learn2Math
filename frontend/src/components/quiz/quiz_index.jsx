import React from 'react';
import QuestionItemContainer from '../question/question_item_container';

class QuizIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = { questions : [] };
  }
  //assume props have lessonId

  componentDidMount() {
    this.props.fetchQuestions()
  }

  render() {
    if (!this.props.questions){
      return null;
    } else {
      return (
        <div>
          <div id='left-side-of-quiz'> 
            <h1>Quiz</h1>
            <ul>
              {this.props.questions.map(question => <QuestionItemContainer question={question}/>)}
            </ul>
          </div>
          {/* <div id='right-side-of-quiz'>
            <QuestionFormComponent/>
          </div> */}
        </div>
      )
    }
  }
}

export default QuizIndex;
import React from 'react';

class QuizIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = { questions : [] };
  }
  //assume props have lessonId

  componentDidMount() {
    this.props.fetchQuestions(this.props.quizId)
  }

  render() {
    if (!questions){
      return null;
    } else {
      return (
        <div>
          <div id='left-side-of-quiz'> 
            <h1>Quiz</h1>
            <ul>
              {this.props.questions.map(question => <QuestionItem question={question}/>)}
            </ul>
          </div>
          <div id='right-side-of-quiz'>
            <QuestionFormComponent/>
          </div>
        </div>
      )
    }
  }
}
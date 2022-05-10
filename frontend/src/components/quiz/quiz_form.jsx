import React from 'react';

class QuizForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { questions : [] };
  }
  //assume props have lessonId

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <div id='left-side-of-quiz'> 
          <h1>Quiz</h1>
          <ul>
            {this.props}
          </ul>
        </div>
        <div id='right-side-of-quiz'>

        </div>
      </div>
    )
  }

}
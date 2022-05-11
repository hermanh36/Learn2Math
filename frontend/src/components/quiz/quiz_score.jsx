import React from 'react';

class QuizScore extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <p>Thank you for finishing the quiz</p>
        <p>Your score is</p>
        <p>{this.props.score}</p>
        <div>
          <button value='Confirm'></button>
        </div>
      </div>
    )
  }
}

export default QuizScore;
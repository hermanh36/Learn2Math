import React from 'react';

class QuizScore extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="quiz-score-wrap">
        <p className="quiz-thank-you">Thank you for finishing the quiz!</p>
        <p className="your-score">Your score is: <span>{this.props.score}</span> </p>
        <div className="quiz-confirm-btn-wrap">
          <Link to=/><button value='Confirm'>Confirm</button></Link>
        </div>
      </div>
    )
  }
}

export default QuizScore;
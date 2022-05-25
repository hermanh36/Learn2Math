import React from 'react';
import { Link } from 'react-router-dom';
class QuizScore extends React.Component {
  constructor(props){
    super(props);
    this.redirectToProfile = this.redirectToProfile.bind(this);
  }

  redirectToProfile(e) {
    e.preventDefault();
    this.props.history.push(`/profile/${this.props.currentUserId}`)
  }
  render() {
    return (
      <div className="quiz-score-wrap">
        <p className="quiz-thank-you">Thank you for finishing the quiz!</p>
        <p className="your-score">Your score is: <span>{this.props.score}</span> </p>
        <div className="quiz-confirm-btn-wrap">
         <button onClick={this.redirectToProfile}value='Confirm'>Confirm</button>
        </div>
      </div>
    )
  }
}

export default QuizScore;
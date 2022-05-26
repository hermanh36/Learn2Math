import React from 'react'

class QuestionItem extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.question)
  }

  render() {
    if (!this.props.question) {
      return null;
    } else {
      return (
        <li className="quiz-question-wrap" key={this.props.question._id}>
          <p className="question-sentence">
            {this.props.question.content}
          </p>
          <div className="question-choices-wrap">
            {this.props.question.answerChoices.map((answer,idx) => (
              <div key={idx}>
                <input type="radio" name={`answer${this.props.question._id}`} value={answer}/>
                <label>{answer}</label>
                {/* maybe render a checkmark, hide
                correct and incorrect until submitted */}
              </div>
            ))}
            {/* // <div>Correct</div>
            // <div>Incorrect</div> */}
          </div>
        </li>
      )
      }
  }
}

export default QuestionItem;
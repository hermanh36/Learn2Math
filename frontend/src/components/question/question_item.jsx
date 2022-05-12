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
        <li>
          {this.props.question.content}
          <div>
            {this.props.question.answerChoices.map(answer => (
              <div>
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
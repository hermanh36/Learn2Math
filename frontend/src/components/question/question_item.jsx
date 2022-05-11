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
            <label>Answers</label>
            {this.props.question.answerChoices.map(answer => (
              <div>
                <input type="radio" name={`answer${this.props.question._id}`} value={answer}/>
                <label>{answer}</label>
              </div>
            ))}
          </div>
        </li>
      )
      }
  }
}

export default QuestionItem;
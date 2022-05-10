import React from 'react'

class QuestionItem extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    debugger;
    this.props.fetchQuestion(this.props.question)
  }

  render() {
    if (!this.props.question) {
      return null;
    } else {
      return (
        <li>
          {this.props.question.content}
        </li>
      )
      }
  }
}

export default QuestionItem;
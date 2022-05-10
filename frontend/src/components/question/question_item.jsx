import React from 'react'

class QuestionItem extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.question)
  }

  render() {
    if (!question) {
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
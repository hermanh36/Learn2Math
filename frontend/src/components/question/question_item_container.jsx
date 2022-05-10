import { connect } from "react-redux"
import QuestionItem from "./question_item"

const mapStateToProps = state => {
  return {
    question: state.entities.question
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: question => dispatch(receiveQuestion(question))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(QuestionItem)
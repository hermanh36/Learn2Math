import { connect } from "react-redux"
import QuestionItem from "./question_item"
import { fetchQuestion } from "../../actions/question_actions"

const mapStateToProps = state => {
  return {
    question: state.entities.question
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: question => dispatch(fetchQuestion(question.id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(QuestionItem)
import { connect } from 'react-redux'
import QuizItem from './quiz_item'
import { createQuestion, fetchQuestions } from '../../actions/question_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    quizId: ownProps.match.params.quizId,
    questions: Object.values(state.entities.questions)
  }
}

const mapStateToDispatch = dispatch => {
  return {
    createQuestion: question => dispatch(createQuestion(question)),
    fetchQuestions: (quizId) => dispatch(fetchQuestions(quizId)) 
  }
}

export default connect(mapStateToProps,mapStateToDispatch)(QuizItem)
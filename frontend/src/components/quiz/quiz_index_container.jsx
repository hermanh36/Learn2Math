import { connect } from 'react-redux'
import QuizIndex from './quiz_index'

const mapStateToProps = (state, ownProps) => {
  return {
    quizId: state.entitiy.quizzes[ownProps.match.params.quizId],
    questions: Object.values(state.entities.questions)
  }
}

const mapStateToDispatch = dispatch => {
  return {
    createQuestion: question => dispatch(createQuestion(question)),
    fetchQuestions: (quizId) => dispatch(fetchQuestions(quizId)) 
  }
}

export default connect(mapStateToProps,mapStateToDispatch)(QuizIndex)
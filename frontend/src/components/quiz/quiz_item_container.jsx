import { connect } from 'react-redux'
import QuizItem from './quiz_item'
import { createQuestion, fetchQuestions } from '../../actions/question_actions'
import { createScore } from '../../actions/quiz_score_action'
import { fetchQuiz } from '../../actions/quiz_action'
import { fetchLesson } from '../../actions/lesson_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    quizId: ownProps.match.params.quizId,
    questions: Object.values(state.entities.questions),
    currentUser: state.session.user.id,
    quizzes: state.entities.quizzes
  }
}

const mapStateToDispatch = dispatch => {
  return {
    createQuestion: question => dispatch(createQuestion(question)),
    fetchQuestions: (quizId) => dispatch(fetchQuestions(quizId)),
    fetchQuiz: quizId => dispatch(fetchQuiz(quizId)),
    fetchLesson: lessonId => dispatch(fetchLesson(lessonId)),
    createQuizScore: score => dispatch(createScore(score))
  }
}

export default connect(mapStateToProps,mapStateToDispatch)(QuizItem)
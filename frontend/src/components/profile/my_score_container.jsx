import { fetchLesson } from "../../actions/lesson_actions"
import { fetchQuiz } from "../../actions/quiz_action"
import { fetchScores } from "../../actions/quiz_score_action"
import { connect } from "react-redux"
import MyScores from "./my_scores"

const mapStateToProps = state => {
  return {
    scores: state.entities.quizScores,
    currentUserId: state.session.user._id,
    lessons: state.entities.lessons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuiz: quizId => dispatch(fetchQuiz(quizId)),
    fetchLesson: lessonId => dispatch(fetchLesson(lessonId)),
    fetchScores: userId => dispatch(fetchScores(userId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyScores)
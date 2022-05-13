//lesson_show_container.js
import { connect } from "react-redux";
import LessonShow from "./lesson_show";
import { fetchLesson } from "../../actions/lesson_actions";
import { fetchQuiz } from '../../actions/quiz_action';
import { fetchQuestions } from '../../actions/question_actions';
import { fetchUsers } from "../../actions/user_actions";

const mSTP = (state, ownProps) => {
  debugger;
  return {
    lesson: state.entities.lessons[ownProps.match.params.lessonId],
    lessonId: ownProps.match.params.lessonId,
    quizzes: state.entities.quizzes,
    questions: state.entities.questions,
    currentUserId: state.session.user.id,
    users: state.entities.users
  }
};

const mDTP = (dispatch) => ({
  fetchLesson: (lessonId) => dispatch(fetchLesson(lessonId)),
  fetchQuiz: lessonId => dispatch(fetchQuiz(lessonId)),
  fetchQuestions: quizId => dispatch(fetchQuestions(quizId)),
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(LessonShow);


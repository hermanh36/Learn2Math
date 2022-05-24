import { connect } from "react-redux";
import LessonShow from "./lesson_show";
import { deleteLesson, fetchLesson } from "../../actions/lesson_actions";
import { fetchQuizByLessonId } from '../../actions/quiz_action';
import { fetchQuestions } from '../../actions/question_actions';
import { fetchUsers } from "../../actions/user_actions";
import { fetchCommentsByLesson, createComment, updateComment, deleteComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
  return {
    lesson: state.entities.lessons[ownProps.match.params.lessonId],
    lessonId: ownProps.match.params.lessonId,
    quizzes: state.entities.quizzes,
    questions: state.entities.questions,
    currentUserId: state.session.user.id,
    users: state.entities.users,
    comments: state.entities.comments
  }
};

const mDTP = (dispatch) => ({
  fetchLesson: (lessonId) => dispatch(fetchLesson(lessonId)),
  fetchQuizByLessonId: lessonId => dispatch(fetchQuizByLessonId(lessonId)),
  fetchQuestions: quizId => dispatch(fetchQuestions(quizId)),
  fetchUsers: () => dispatch(fetchUsers()),
  deleteLesson: lessonId => dispatch(deleteLesson(lessonId)),
  fetchCommentsByLesson: lessonId => dispatch(fetchCommentsByLesson(lessonId)),
  createComment: comment => dispatch(createComment(comment)),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId))
})

export default connect(mSTP, mDTP)(LessonShow);


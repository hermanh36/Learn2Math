import { connect } from "react-redux";
import { fetchLesson, updateLesson } from "../../actions/lesson_actions";
import LessonForm from "./lesson_form";

const mapStateToProps = (state, ownProps) => {
  return {
    lesson: {
      content: state.entities.lessons[ownProps.match.params.lessonId]?.content,
      category: state.entities.lessons[ownProps.match.params.lessonId]?.category
    },
    lessonId: ownProps.match.params.lessonId,
    formType: 'Edit'

  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitForm: lesson => dispatch(updateLesson(lesson)),
    fetchLesson: lessonId => dispatch(fetchLesson(lessonId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LessonForm);
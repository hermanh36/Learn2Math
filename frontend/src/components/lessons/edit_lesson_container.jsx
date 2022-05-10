import { connect } from "mongoose";
import { updateLesson } from "../../actions/lesson_actions";
import LessonForm from "./lesson_form";

const mapStateToProps = (state, ownProps) => {
  return {
    content: this.state.lessons[ownProps.match.params.lessonId].content,
    header: 'Create Your Lesson!'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateLesson: lesson => dispatch(updateLesson(lesson))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LessonForm);


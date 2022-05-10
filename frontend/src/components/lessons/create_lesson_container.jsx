import { connect } from "react-redux";
import { createLesson } from "../../actions/lesson_actions";
import LessonForm from './lesson_form'

const mapStateToProps = state => {
  return {
    content: "",
    header: 'Create Your Lesson!'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createLesson: lesson => dispatch(createLesson(lesson))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LessonForm)


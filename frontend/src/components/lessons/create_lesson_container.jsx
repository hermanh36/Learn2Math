import { connect } from "react-redux";
import { createLesson } from "../../actions/lesson_actions";
import LessonForm from './lesson_form'

const mapStateToProps = state => {
  return {
    lesson: {
      content:'',
      category:''
    },
    formType: 'Create'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitForm: lesson => dispatch(createLesson(lesson))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LessonForm)
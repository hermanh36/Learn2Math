import { connect } from "react-redux";
import { createLesson } from "../../actions/lesson_actions";
import { createQuiz } from "../../actions/quiz_action";
import LessonForm from './lesson_form'

const mapStateToProps = state => {
  return {
    lesson: {
      authorId: '',
      content: '',
      title: '',
      category: ''
    },
    formType: 'Create',
    errors: state.errors.lesson
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitForm: lesson => dispatch(createLesson(lesson)),
    createQuiz: quiz => dispatch(createQuiz(quiz))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LessonForm)
import { connect } from 'react-redux';
import { deleteQuestion, updateQuestion } from '../../actions/question_actions';
import NewQuestionForm from './new_question_form';

const mapState = (state, ownProps) => ({
    formType: 'Update'
})

const mapDispatch = dispatch => ({
    submitForm: question => dispatch(updateQuestion(question)),
    deleteQuestion: questionId => dispatch(deleteQuestion(questionId))
})

export default connect(mapState, mapDispatch)(NewQuestionForm);
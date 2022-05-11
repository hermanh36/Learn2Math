import { connect } from 'react-redux';
import { updateQuestion } from '../../actions/question_actions';
import NewQuestionForm from './new_question_form';

const mapState = (state, ownProps) => ({
    formType: 'Update'
})

const mapDispatch = dispatch => ({
    submitForm: question => dispatch(updateQuestion(question))
})

export default connect(mapState, mapDispatch)(NewQuestionForm);
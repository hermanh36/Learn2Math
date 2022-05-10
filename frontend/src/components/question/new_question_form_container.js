import { connect } from 'react-redux';
import { createQuestion } from '../../actions/question_actions';
import NewQuestionForm from './new_question_form';

const mapState = state => ({

})

const mapDispatch = dispatch => ({
    createQuestion: question => dispatch(createQuestion(question))
})

export default connect(mapState, mapDispatch)(NewQuestionForm);
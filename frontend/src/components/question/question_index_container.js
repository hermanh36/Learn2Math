import {connect} from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions';
import QuestionIndex from './question_index';

const mapState = (state, ownProps) => ({
    quizId: ownProps.match.params.quizId,
    questions: state.entities.questions
})

const mapDispatch = dispatch => ({
    fetchQuestions: (quizId) => dispatch(fetchQuestions(quizId))
})

export default connect(mapState, mapDispatch)(QuestionIndex);
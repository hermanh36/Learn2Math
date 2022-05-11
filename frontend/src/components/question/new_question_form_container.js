import { connect } from 'react-redux';
import { createQuestion } from '../../actions/question_actions';
import NewQuestionForm from './new_question_form';

const mapState = (state,ownProps) => ({
    question: {
        quizId: ownProps.match.params.quizId,
        content: '',
        answerChoices: [],
        correctAnswer: '',
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: ''
    },
    formType: 'Create'
})

const mapDispatch = dispatch => ({
    submitForm: question => dispatch(createQuestion(question))
})

export default connect(mapState, mapDispatch)(NewQuestionForm);
import { connect } from "react-redux";
import {QuestionError} from './question_error';

const mapState = state => ({
    errors: state.errors.question
})

export default connect(mapState)(QuestionError);
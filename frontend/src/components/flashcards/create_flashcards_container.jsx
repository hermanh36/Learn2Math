import { connect } from "mongoose";
import { createQuestion} from "../../util/question_api_util";
import FlashcardForm from "./flashcard_form";

const mapStateToProps = state => {
  return {
    flashcard: {
      title: "",
      body: "",
    },
    formtype: 'Create',
    errors: state.errors.flashcard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitForm : question => dispatch(createQuestion(question))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardForm);
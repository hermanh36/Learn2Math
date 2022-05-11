import { connect } from "mongoose";
import { createQuestion} from "../../util/question_api_util";

const mapStateToProps = state => {
  return {
    flashcard: {
      title: "",
      body: "",
    },
    formtype: 'Create'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createQuestion : question => dispatch(createQuestion(question))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardForm);
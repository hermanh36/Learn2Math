import { connect } from "react-redux";
import { createFlashcard } from "../../actions/flashcard_actions";
import FlashcardForm from "./flashcard_form";

const mapStateToProps = state => {
  return {
    flashcard: {
      title: "",
      body: "",
    },
    formType: 'Create',
    errors: state.errors.flashcard,
    currentUserId: state.session.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitForm : flashcard => dispatch(createFlashcard(flashcard))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardForm);
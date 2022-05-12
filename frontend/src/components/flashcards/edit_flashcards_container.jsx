import { connect } from "react-redux"
import { deleteFlashcard, fetchFlashcard, updateFlashcard } from "../../actions/flashcard_actions"
import FlashcardForm from "./flashcard_form"

const mapStateToProps = (state, ownProps) => {
    return {
        flashcard: state.entities.flashcards[ownProps.match.params.flashcardId],
        flashcardId: ownProps.match.params.flashcardId,
        formType: 'Edit',
        errors: state.errors.flashcard
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFlashcard: flashcardId => dispatch(fetchFlashcard(flashcardId)),
        submitForm: flashcard => dispatch(updateFlashcard(flashcard)),
        deleteFlashcard: flashcardId => dispatch(deleteFlashcard(flashcardId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FlashcardForm);
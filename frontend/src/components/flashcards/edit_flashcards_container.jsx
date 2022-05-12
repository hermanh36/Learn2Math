import { connect } from "react-redux"
import { fetchFlashcard, updateFlashcard } from "../../actions/flashcard_actions"
import FlashcardForm from "./flashcard_form"

const mapStateToProps = (state, ownProps) => {
    return {
        flashcard: state.entities.flashcard[ownProps.match.params.flashcardId],
        flashcardId: ownProps.match.params.flashcardId,
        formType: 'Edit',
        errors: state.errors.flashcard
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFlashcard: flashcardId => dispatch(fetchFlashcard(flashcardId)),
        submitForm: flashcard => dispatch(updateFlashcard(flashcard))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FlashcardForm);
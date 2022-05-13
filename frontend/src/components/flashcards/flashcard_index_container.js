import { connect } from 'react-redux';
import FlashcardIndex from './flashcard_index';
import { deleteFlashcard, fetchFlashcards } from '../../actions/flashcard_actions';

const mapState = state => ({
    flashcards: state.entities.flashcards
})

const mapDispatch = dispatch => ({
    fetchFlashcards: studentId => dispatch(fetchFlashcards(studentId)),
    deleteFlashcard: flashcardId => dispatch(deleteFlashcard(flashcardId))
})

export default connect(mapState, mapDispatch)(FlashcardIndex);
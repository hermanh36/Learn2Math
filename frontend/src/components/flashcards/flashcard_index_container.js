import {connect} from 'react-redux';
import FlashcardIndex from './flashcard_index';

const mapState = state => ({
    flashcards: state.entities.flashcards
})

const mapDispatch = dispatch => ({
    fetchFlashcards: studentId => dispatch(fetchFlashcards(studentId))
})

export default connect(mapState, mapDispatch)(FlashcardIndex);
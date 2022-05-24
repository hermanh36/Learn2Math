import { connect } from 'react-redux';
import FlashcardIndex from './flashcard_index';
import { deleteFlashcard, fetchFlashcards } from '../../actions/flashcard_actions';
import { fetchUser, removeUsers } from '../../actions/user_actions';

const mapState = (state, ownProps) => ({
    flashcards: state.entities.flashcards,
    currentUserId: state.session.user.id,
    userId: ownProps.match.params.userId,
    authors: state.entities.users
})

const mapDispatch = dispatch => ({
    fetchFlashcards: studentId => dispatch(fetchFlashcards(studentId)),
    deleteFlashcard: flashcardId => dispatch(deleteFlashcard(flashcardId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    clearUsers: () => dispatch(removeUsers())
})

export default connect(mapState, mapDispatch)(FlashcardIndex);
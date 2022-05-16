import { connect } from "react-redux";
import { clearLessons, fetchMyLessons } from "../../actions/lesson_actions";
import MyLessons from './my_lesson';

const mapState = state => ({
    lessons: state.entities.lessons
})

const mapDispatch = dispatch => ({
    fetchMyLessons: authorId => dispatch(fetchMyLessons(authorId)),
    clearLessons: () => dispatch(clearLessons())
})

export default connect(mapState, mapDispatch)(MyLessons);
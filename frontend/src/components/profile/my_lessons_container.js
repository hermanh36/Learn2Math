import { connect } from "react-redux";
import { fetchMyLessons } from "../../util/lesson_util";
import MyLessons from './my_lesson';

const mapState = state => ({
    lessons: state.entities.lessons
})

const mapDispatch = dispatch => ({
    fetchMyLessons: authorId => dispatch(fetchMyLessons(authorId))
})

export default connect(mapState, mapDispatch)(MyLessons);
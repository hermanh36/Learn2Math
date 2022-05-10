import { connect } from "react-redux";
import { fetchLessons } from "../../actions/lesson_actions";
import CategoryIndex from "./category_index";
import { getLessonValues } from "../../selectors/selector";

const mSTP = (state) => ({
  lessons: getLessonValues(state.entities.lessons)
}); 

const mDTP = (dispatch) => ({
  fetchLessons: () => dispatch(fetchLessons())
}); 

export default connect(mSTP, mDTP)(CategoryIndex); 
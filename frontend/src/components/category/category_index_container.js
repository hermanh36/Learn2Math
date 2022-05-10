import { connect } from "react-redux";
import { fetchLessons } from "../../actions/lesson_actions";
import CategoryIndex from "./category_index";

const mSTP = () => ({

}); 

const mDTP = (dispatch) => ({
  fetchLessons: () => dispatch(fetchLessons())
}); 

export default connect(mSTP, mDTP)(CategoryIndex)
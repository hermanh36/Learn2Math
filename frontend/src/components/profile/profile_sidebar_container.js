import { connect } from "react-redux";
import ProfileSidebar from "./profile_sidebar";

const mSTP = (state, ownProps) => ({
    currentUserId: state.session.user._id 
    // lessons: state.entities.lessons,
    // lesson: state.entities.lessons[ownProps.match.params.lessonId],
    // user: state.entities.user[ownProps.match.params.userId]
})

const mDTP = (dispatch) => ({

})

export default connect(mSTP, mDTP)(ProfileSidebar);
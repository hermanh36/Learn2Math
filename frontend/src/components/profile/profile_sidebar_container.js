import { connect } from "react-redux";
import ProfileSidebar from "./profile_sidebar";

const mSTP = (state, ownProps) => {
    return {
        currentUserId: state.session.user._id,
        profileOwner: ownProps.profileOwner
    }
}

const mDTP = (dispatch) => ({
    
})

export default connect(mSTP, mDTP)(ProfileSidebar);
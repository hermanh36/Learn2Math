import {connect} from 'react-redux';
import LeftSidebar from './left_sidebar';
import { fetchUser } from '../../actions/user_actions';

const mapState = state => ({
    currentUserId: state.session.user.id,
    users: state.entities.users
})

const mapDispatch = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mapState,mapDispatch)(LeftSidebar);
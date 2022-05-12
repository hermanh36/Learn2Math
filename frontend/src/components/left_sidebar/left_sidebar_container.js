import {connect} from 'react-redux';
import LeftSidebar from './left_sidebar';

const mapState = state => ({
    currentUserId: state.session.user.id
})

export default connect(mapState)(LeftSidebar);
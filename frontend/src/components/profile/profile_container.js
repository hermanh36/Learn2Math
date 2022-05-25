// src/components/profile/profile_container.js
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser, removeUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    clearUsers: () => dispatch(removeUsers)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
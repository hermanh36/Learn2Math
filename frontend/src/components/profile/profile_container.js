// src/components/profile/profile_container.js
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
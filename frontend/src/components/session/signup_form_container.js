// src/components/session/signup_form_container.js

import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
    currentUserId: state.session.user ? state.session.user._id : undefined
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
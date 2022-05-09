// src/components/nav/navbar.js

import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }
  openLoginModal(e){
    e.preventDefault();
    this.props.openModal();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <Link to={'/tweets'}>All Tweets</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/new_tweet'}>Write a Tweet</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
                <Link to={'/signup'} className="signup-btn">Signup</Link>
                <button className="login-btn" onClick={this.openLoginModal}> Login </button>
            </div>
        );
      }
  }

  render() {
      return (
        <div className="main-nav-wrap">
            <h1>
              <Link to="/">
                Learn2Math
              </Link>
            </h1>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;
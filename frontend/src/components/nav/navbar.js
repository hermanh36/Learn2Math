// src/components/nav/navbar.js

import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                {/* <Link to={'/profile'}>Profile</Link> */}
                <button className="menu-logout-button" onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
                <Link to={'/signup'} className="signup-btn">Signup</Link>
                <Link to={'/login'} className="login-btn">Login</Link>
            </div>
        );
      }
  }
  
  render() {
      return (
        <div className="main-nav-wrap">
            <h1>
              <Link to={this.props.loggedIn ? "/" : ""}>
                Learn2Math
              </Link>
            </h1>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;
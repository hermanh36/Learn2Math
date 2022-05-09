// src/components/main/main_page.js
import mathSplash from "./../../images/math_splash.jpg"

import React from 'react';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>A Twitter Clone</h1>
        <div className="splash-image-wrap">
          <div>
              stuff
          </div>
          {/* <img src={mathSplash} alt="math splash" /> */}
        </div>
        <footer className="footer">
          Copyright &copy; 2021 Learn2Math
        </footer>
      </div>
    );
  }
}

export default MainPage;
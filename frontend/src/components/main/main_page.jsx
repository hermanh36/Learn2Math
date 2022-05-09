// src/components/main/main_page.js
import mathSplash from "./../../images/math_splash.jpg"

import React from 'react';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <div className="splash-image-wrap">
          <div>

          </div>
          <div>
              <h1>Ready 2 Math?</h1>
              <div className="big-signup-btn">
                <button>Sign up!</button>
              </div>
          </div>
          {/* <img src={mathSplash} alt="math splash" /> */}
        </div>
        {/* <footer className="footer">
          Copyright &copy; 2021 Learn2Math
        </footer> */}
      </div>
    );
  }
}

export default MainPage;
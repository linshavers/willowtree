import React, { Component } from "react";
import "./App.css";
import logo from "./Graphics/logo-white.png";
import introImage from "./Graphics/introimage.png";

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="intro">
          {/*Intro Left*/}
          <div className="intro-left-container">
            <div className="image-left">
              <img src={introImage} style={introImageStyles} />
            </div>
            <div className="logo">
              <img src={logo} style={introLogoStyles} />
            </div>

            {/*Intro Right*/}
            <div className="intro-right-container">
              <div className="nav-bar">
                <h1>Work</h1>
                <h1>About</h1>
                <h1>Careers</h1>
                <h1>Ideas</h1>
                <h1>Contact Us</h1>

              </div>
              <div className="what-we-do-text" />
            </div>
          </div>
        </div>

        <div className="how-we-do-it">
          <div className="how-we-do-it-title-left" />
          <div className="how-we-do-it-text-right" />
        </div>

        <div className="core-services">
          <div className="core-services-links-left" />
          <div className="core-services-links-right" />
        </div>

        <div className="quote-bar">
          <div className="quote-ticker" />
          <div className="quote-progress-bar" />
        </div>
        <div className="partner-certifications">
          <div className="partner-certifications-header" />
          <div className="partner-certifications-left" />
          <div className="partner-certifications-right" />
        </div>
        <div className="select-recognition">
          <div className="select-recognition-title" />
          <div className="selet-recognition-content" />
        </div>
        <div className="our-leadership">
          <div className="our-leaderhip-header" />
          <div className="our-leadership-content-grid" />
        </div>
        <div className="our-offices">
          <div className="our-offices-header" />
          <div className="our-offices-image-scroll" />
        </div>
        <div className="select-press-speaking">
          <div className="select-press-header" />
          <div className="select-press-list" />
          <div className="speaking-header" />
          <div className="speaking-list" />
        </div>
        <div className="next-hire-say-hello">
          <div className="next-hire" />
          <div className="say-hello-form" />
        </div>
        <div className="footer">
          <div className="footer-left" />
          <div className="footer-right" />
        </div>
      </div>
    );
  }
}

const introLogoStyles = {
  width: 225,
  height: 50
};

const introImageStyles = {
  width: 700,
  height: 675
};

export default App;

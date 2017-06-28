import React, { Component } from "react";
import "./App.css";
import logo from "./Graphics/logo-white.png";
import introImage from "./Graphics/introImage.jpeg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="intro">

          {/*Intro Left*/}
          <div className="intro-left">
            <div className="image-left">
              <img src={introImage} style={introImageStyles} />
            </div>
            <div className="logo">
              <a href={"https://willowtreeapps.com/"}>
                <img src={logo} style={introLogoStyles} />
              </a>
            </div>
          </div>

          {/*Intro Right*/}
          <div className="intro-right">
            <div className="nav-bar">
              <p><a href={"https://willowtreeapps.com/work"}>Work</a></p>
              <p><t href={"http://localhost:3000/"}>About</t></p>
              <p>
                <a href={"https://willowtreeapps.com/careers"}>Careers</a>
              </p>
              <p><a href={"https://willowtreeapps.com/ideas"}>Ideas</a></p>
              <p>
                <a href={"https://willowtreeapps.com/contact"}>Contact Us</a>
              </p>
            </div>
            <div className="what-we-do-text">
              <h1>What we do</h1>
              <h2 id="what-we-do-text-text">
                We build apps, responsive sites, bots—any digital product that
                lives on a screen—for the world’s leading companies. Our elite
                teams challenge themselves to build extraordinary experiences
                by
                bridging the latest strategy and design thinking with
                enterprise-grade software development.
              </h2>
            </div>
          </div>
        </div>

        <div className="how-we-do-it">
          <div className="how-we-do-it-title-left">
            How we do it
          </div>
          <div className="how-we-do-it-text-right">
            <p>
              Our teams work together—under the same roof, in the same room. We
              build our creative centers in top college towns where we can
              attract
              top talent and offer an incredible lifestyle. We hire only the
              best
              and trust our teams to work autonomously. We are independent—our
              only responsibility is to deliver extraordinary outcomes to our
              clients.
            </p>
            <p>
              The result is the highest team satisfaction in the industry,
              independent analyst recognition, and an ever-growing list of
              delighted clients who work with us again and again.
            </p>
          </div>
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
  width: 720,
  height: 750
};

export default App;

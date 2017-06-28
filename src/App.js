import React, { Component } from "react";
import "./App.css";
import logo from "./Graphics/logo-white.png";
import introImage from "./Graphics/introImage.jpeg";
import quoteImage from "./Graphics/quotelogo.png";
import LinearProgress from "material-ui/LinearProgress";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Apple from "./Graphics/Apple-logo-grey.png";
import Google from "./Graphics/certified-1.png";
import Xamarin from "./Graphics/xamagon.png";
import Sap from "./Graphics/sap_partner.gif";

let quotes = {
  1: [
    "WillowTree suggested many things for the app that we hadn’t thought of. They helped create buzz around the launch and the press really picked up on the augmented reality—even Associated Press wrote about it.",
    "—Zach Wheat, Director of Web Communications, UVA"
  ],
  2: [
    "Best Mobile Credit Union App: Alliant. The app checks all the usual boxes...but it dominates when it comes to mobile depositing and money management tools.",
    "-NerdWallet"
  ],
  3: [
    "WillowTree is a great partner and brings a lot of mobile expertise to the table. They are truly committed to the success of the project and work closely with our team.",
    "—Dave Weiss, CTO BabyCenter LLC, Johnson & Johnson"
  ],
  4: [
    "We’re in the media business, so sustaining user engagement is key. We provide both content and community and WillowTree has helped us to deliver that in ways some of our users have described as – addictive! ",
    "—Trei Brundrett, Chief Product Officer, Vox Media"
  ],
  5: [
    "The service WillowTree Apps delivered while building the Inc. 500 app was second to none. Being new to the mobile landscape, it spoke volumes to have a team that carefully walked me through the entire process.",
    "—Billie Gibson, Sr. Account Manager, Inc. Magazine"
  ]
};

let Timer;
let index;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: quotes,
      index: 1,
      completed: 0
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(50), 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 1000) {
      this.setState({
        ...this.state,
        completed: 1000
      });
    } else {
      if (this.state.index === 5) {
        this.setState({
          ...this.state,
          completed: 0,
          index: 1
        });
      } else {
        this.setState({
          ...this.state,
          completed: 0,
          index: this.state.index + 1
        });
      }
      this.timer = setTimeout(() => this.progress(50), 2000);
    }
  }

  render() {
    index = this.state.index;
    let quote = quotes[index];
    return (
      <MuiThemeProvider>
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

          {/*Second Page*/}
          <div className="how-we-do-it">
            <div className="how-we-do-it-title-left">
              How we do it
            </div>
            <div className="how-we-do-it-text-right">
              <p>
                Our teams work together—under the same roof, in the same room.
                We
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

          {/*Third Page*/}
          <div className="core-services">
            <div className="core-services-links-left">
              <div id="core-services-left-text">
                <p> CORE SERVICES</p>
                <h1>
                  <a
                    href={
                      "https://willowtreeapps.com/services/mobile-product-strategy"
                    }
                  >
                    Mobile Project Strategy
                  </a>
                </h1>
                <h1>
                  <a
                    href={
                      "https://willowtreeapps.com/services/mobile-engagement"
                    }
                  >
                    Mobile Engagement
                  </a>
                </h1>
                <h1>
                  <a
                    href={"https://willowtreeapps.com/services/web-development"}
                  >
                    Web Development
                  </a>
                </h1>
              </div>
            </div>

            <div className="core-services-links-right">
              <div id="core-services-right-text">
                <h1>
                  <a
                    href={"https://willowtreeapps.com/services/product-design"}
                  >
                    Product Design
                  </a>
                </h1>
                <h1>
                  <a
                    href={
                      "https://willowtreeapps.com/services/native-app-development"
                    }
                  >
                    Native App Development
                  </a>
                </h1>
                <h1>
                  <a
                    href={
                      "https://willowtreeapps.com/services/rapid-prototyping"
                    }
                  >
                    Rapid Prototyping
                  </a>
                </h1>
              </div>
            </div>
          </div>

          {/*Fourth Page*/}
          <div className="quote-bar">
            <div className="quote-ticker">
              <img
                id={"quote-image"}
                src={quoteImage}
                style={quoteImageStyles}
              />
            </div>
            <div className={"quote-text"}>
              <h1>"{quote[0]}" </h1>
              <br />
              <p>{quote[1]}</p>
            </div>
            <br />
            <br />
            <LinearProgress
              className="quote-progress-bar"
              mode="determinate"
              value={this.state.completed}
            />
          </div>

          {/*Fifth Page*/}
          <div className="partner-certifications">
            <div className="partner-certifications-header">
              Partner Certifications
            </div>
            <div className="parter-certifcations-header-body">
              <p>
                WillowTree is one of a select handful of agencies recognized and
                certified by
              </p>
              <p>our partners at Apple, Google, and Microsoft.</p>
            </div>
            <div className="partner-certifications-logos">
              <div className="partner-certifications-apple">
                <div className="partner-certifications-apple-logo">
                  <img src={Apple} style={appleLogo} />
                  <div className="partner-certifications-apple-text">
                    Apple Mobility Partner Program<p>(MPP)</p>
                  </div>
                </div>
              </div>
              <div className="partner-certifications-google">
                <div className="partner-certifications-google-logo">
                  <img src={Google} style={googleLogo} />
                </div>
                <div className="partner-certifications-google-text">
                  Google Developer Certified <p>Agency</p>
                  <p>
                    <a href="https://developers.google.com/agency/directory">
                      Learn
                      more
                    </a>
                  </p>
                </div>
              </div>
              <div className="partner-certifications-xamarin">
                <div className="partner-certifications-xamarin-logo">
                  <img src={Xamarin} style={xamarinLogo} />
                </div>
                <div className="partner-certifications-xamarin-text">
                  Microsoft Xamarin Certified Premier <p>Consulting Partner</p>
                  <p>
                    <a href="https://www.xamarin.com/consulting-partners/find?q=%7B%22name%22%3A%22willowtree%22%2C%22location%22%3A%7B%22value%22%3A%22United%20States%22%2C%22coords%22%3A%5B40.675918%2C-105.492056%5D%2C%22isACountry%22%3Atrue%2C%22country%22%3A%22United%20States%22%7D%7D">
                      Learn
                      more
                    </a>
                  </p>
                </div>
              </div>
              <div className="partner-certifications-sap">
                <div className="partner-certifications-sap-logo">
                  <img src={Sap} style={sapLogo} />
                </div>
                <div className="partner-certifications-sap-text">
                  SAP Consulting Partner Program
                </div>
              </div>
            </div>
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
      </MuiThemeProvider>
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

const quoteImageStyles = {
  width: 400,
  height: 400
};

const appleLogo = {
  height: 323,
  width: 454
};

const googleLogo = {
  height: 200,
  width: 164
};

const xamarinLogo = {
  height: 320,
  width: 320
};

const sapLogo = {
  height: 115,
  width: 192
};

export default App;

import React from "react";

const HomePage = ({ scrollToSection }) => {
  return (
    <div className="section-home" id="home">
      <div className="background-homepage">
        <img src="assets/background.svg" alt="background"></img>
      </div>
      <div className="contact-me">
        <a href="#contact">
          <div className="contact-div" onClick={scrollToSection}>
            <div className="contact-title">Contact Me</div>
            <img src="assets/arrow.svg" alt="arrow"></img>
          </div>
          <div className="contact-subtitle">Value from Innovation</div>
          <div className="contact-subtitle">Real Innovation</div>
        </a>
      </div>
      <div className="container-home">
        <div className="text-gradient-1 container-title">
          A FRONT END DEVELOPER
        </div>
        <img className="container-my-name" src="assets/Irina.png"></img>
      </div>
    </div>
  );
};

export default HomePage;

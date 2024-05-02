import React from "react";
import "./css/landing.css";
import home_overlay from "./images/home_overlay.png";
import landingImg from "./images/about.jpg";

function Landing() {
  return (
    <div className="landing">
      <div className="landingImg">
        <img className="img-fluid" src={landingImg} alt="landingImg" />
        <img className="landing-overlay" src={home_overlay} alt="" />
      </div>
      <div className="landing-text">
        <h2>About us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}

export default Landing;

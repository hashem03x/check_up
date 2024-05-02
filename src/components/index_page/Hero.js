import React from "react";
import carousel_image1 from "../images/slider/doctor-nurses-special-equipment.jpg";
import carousel_image2 from "../images/slider/doctor-s-hand-holding-stethoscope-closeup.jpg";
import carousel_image3 from "../images/slider/front-view-female-doctor-holding-big-injection-yellow-space.jpg";
import Carousel from "react-bootstrap/Carousel";
import "./css/hero.css";
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <CAROUSEL_COMPONENT />
            <div className="heroText d-flex flex-column justify-content-center">
              <h1 className="mt-auto mb-2">
                Better
                <div className="animated-info">
                  <span className="animated-item"> health</span>
                  <span className="animated-item"> days</span>
                  <span className="animated-item"> lives</span>
                </div>
              </h1>
              <p className="mb-4">
                An Application Which Human can use it for Quick CheckUp by
                Questioners , It's Specializing your Pain and Recommending to
                you some Tests and Right Medicine for your Case .. .
              </p>
              <div className="heroLinks d-flex flex-wrap align-items-center">
                <a
                  className="custom-link me-4"
                  href="#about"
                  data-hover="Learn More"
                >
                  Learn More
                </a>
                <p className="contact-phone mb-0">
                  <i className="bi-phone"></i> 010-020-0340
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

function CAROUSEL_COMPONENT() {
  return (
    <Carousel fade interval={2000}>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={carousel_image1}
          alt="carousel_image1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={carousel_image2}
          alt="carousel_image2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={carousel_image3}
          alt="carousel_image3"
        />
      </Carousel.Item>
    </Carousel>
  );
}

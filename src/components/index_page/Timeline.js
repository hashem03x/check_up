import React from "react";
import "./css/timeline.css";
function Timeline() {
  return (
    <section className="section-padding pb-0" id="timeline">
      <div className="container">
        <div className="row">
          <h2 className="text-center mb-lg-5 mb-4">our services</h2>

          <div className="timeline">
            <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes">
              <div className="col-9 col-md-5 me-md-4 me-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                <h3 className=" text-light">Know your illness</h3>

                <p>
                  Find out your illness through several questions through the
                  chat bot service To relieve your pain.
                </p>
              </div>

              <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                <i className="bi-patch-check-fill timeline-icon"></i>
              </div>

              <div className="col-9 col-md-5 ps-md-3 ps-lg-0 order-1 order-md-3 py-4 timeline-moto">
                <p>Better health</p>
              </div>
            </div>

            <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes my-lg-5 my-4">
              <div className="col-9 col-md-5 ms-md-4 ms-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                <h3 className=" text-light">Sick record</h3>

                <p>
                  A record is prepared of all the diseases you have encountered
                  and entered through our services{" "}
                </p>
              </div>

              <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                <i className="bi-book timeline-icon"></i>
              </div>

              <div className="col-9 col-md-5 pe-md-3 pe-lg-0 order-1 order-md-3 py-4 timeline-moto">
                <p>Better health</p>
              </div>
            </div>

            <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes">
              <div className="col-9 col-md-5 me-md-4 me-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                <h3 className=" text-light">Our information</h3>

                <p>
                  All medical information is taken from scientific research and
                  reliable medical books from the World Health Organization.
                </p>
              </div>

              <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                <i className="bi-file-medical timeline-icon"></i>
              </div>

              <div className="col-9 col-md-5 ps-md-3 ps-lg-0 order-1 order-md-3 py-4 timeline-moto">
                <p>Better health</p>
              </div>
            </div>

            <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes my-lg-5 my-4">
              <div className="col-9 col-md-5 ms-md-4 ms-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                <h3 className=" text-light">Availability</h3>
                <p>
                  You can use our services anytime, anywhere from any devi We
                  wish you better health
                </p>
              </div>

              <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                <i className="bi-globe timeline-icon"></i>
              </div>

              <div className="col-9 col-md-5 pe-md-3 pe-lg-0 order-1 order-md-3 py-4 timeline-moto">
                <p>Better health</p>
              </div>
            </div>

            <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes">
              <div className="col-9 col-md-5 me-md-4 me-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                <h3 className=" text-light">Register with us</h3>

                <p>
                  Register with us to monitor your health condition
                  periodicallyTo enjoy a healthier soup{" "}
                </p>
              </div>

              <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                <i className="bi-person timeline-icon"></i>
              </div>

              <div className="col-9 col-md-5 ps-md-3 ps-lg-0 order-1 order-md-3 py-4 timeline-moto">
                <p>Better health</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;

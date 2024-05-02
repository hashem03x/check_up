import React from "react";
import "./css/footer.css";
function Footer() {
  return (
    <footer className="site-footer section-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 my-6 my-lg-0">
            <h5 className="mb-lg-6 mb-3">contact us</h5>
            <p>
              <a href="hello@checkup.co">hello@checkup</a>
            </p>
            <p>123 Digital Art Street, San Diego, CA 92123</p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ms-auto">
            <h5 className="mb-lg-6 mb-2">Socials</h5>
            <ul className="social-icon">
              <li>
                <a href="#" className="social-icon-link bi-facebook"></a>
              </li>
              <li>
                <a href="#" className="social-icon-link bi-twitter"></a>
              </li>
              <li>
                <a href="#" className="social-icon-link bi-instagram"></a>
              </li>
              <li>
                <a href="#" className="social-icon-link bi-youtube"></a>
              </li>
            </ul>
            <div>
              <p className="copyright-text">Copyright © checkup 2024</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

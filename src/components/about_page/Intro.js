import React from "react";

function Intro() {
  return (
    <div className="intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="intro_content">
              <div className="section_title_container">
                <div className="section_subtitle">
                  This is check up application
                </div>
                <div className="section_title">
                  <h2>Welcome to our app</h2>
                </div>
              </div>
              <div className="intro_text">
                <p>
                  Integer aliquet congue libero, eu gravida odio ultrces ut.
                  Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis
                  feugiat bibendum orci, non elementum urna vestibulum in. Nulla
                  facilisi. Nulla egestas vel lacus sed interdum. Sed mollis,
                  orci elementum. Etiam ac erat ut enim maximus accumsan vel
                  acnisl. Duis feugiat bibendum orci, non elementum urna
                  vestibulum in. Nulla facilisi. Nulla egestas vel lacus sed
                  interdum.
                </p>
              </div>
              <div className="milestones">
                <div className="row milestones_row"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 offset-lg-1">
            <div className="intro_image">
              <img src="./images/about/intro_1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;

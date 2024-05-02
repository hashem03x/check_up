import React from "react";
import Doc1 from "./images/team_1.jpg";
import Doc2 from "./images/team_2.jpg";
import Doc3 from "./images/team_3.jpg";
import "./css/doctors.css";
function Doctors() {
  return (
    <div className="team">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <div className="section_subtitle">check up</div>
              <div className="section_title">
                <h2>Meet our Doctor</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row team_row">
          <div className="col-lg-4 team_col">
            <div className="team_item text-center d-flex flex-column aling-items-center justify-content-end">
              <div className="team_image">
                <img src={Doc1} alt="" />
              </div>
              <div className="team_content text-center">
                <div className="team_name">
                  <a href="#">Michael Smith</a>
                </div>
                <div className="team_title">eye Surgeon</div>
                <div className="team_text">
                  <p>
                    Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel
                    ac nisl. Duis feugiat bibendum orci, non elementum urna.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 team_col">
            <div className="team_item text-center d-flex flex-column aling-items-center justify-content-end">
              <div className="team_image">
                <img src={Doc2} alt="" />
              </div>
              <div className="team_content text-center">
                <div className="team_name">
                  <a href="#">Samantha Doe</a>
                </div>
                <div className="team_title">eye Surgeon</div>
                <div className="team_text">
                  <p>
                    Ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac
                    nisl. Duis feugiat bibendum orci, non elementum urna.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 team_col">
            <div className="team_item text-center d-flex flex-column aling-items-center justify-content-end">
              <div className="team_image">
                <img src={Doc3} alt="" />
              </div>
              <div className="team_content text-center">
                <div className="team_name">
                  <a href="#">James Carl</a>
                </div>
                <div className="team_title">eye Surgeons</div>
                <div className="team_text">
                  <p>
                    Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis
                    feugiat bibendum orci, non elementum urna. Odio ultrices ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;

import React, { useState } from "react";
import "./css/q&a.css";

function QUESTION_ANSWER() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="q_a_button" onClick={() => setShowModal(true)}>
        Start
      </button>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
}

export default QUESTION_ANSWER;

export function Modal({ setShowModal }) {
  return (
    <div className="q_a_modal">
      <div className="q_a_modal_header">
        <h4>Some Rules of thisq&a</h4>
        <button className="modal_close" onClick={() => setShowModal(false)}>
          ❌
        </button>
      </div>
      <div className="q_a_modal_body">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <div className="q_a_modal_actions">
        <button
          className="btn btn-danger"
          style={{ marginRight: "40px" }}
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
        <button
          className="btn btn-primary"
          onClick={() => console.log("TO NEXT MODAL")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

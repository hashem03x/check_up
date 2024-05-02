import React, { useState } from "react";
import "./css/login.css";
function ConfirmPassword() {
  const [newPass, setNewPass] = useState("");
  const [confirmedPass, setConfirmedPass] = useState("");
  const [alert, setAlert] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [VerCode, setVerCode] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    if (newPass === "" || confirmedPass === "") {
      return;
    }
    if (newPass === confirmedPass) {
      setShowModal(true);
    } else {
      setAlert("Password Don't Match");
    }
  }

  function handleVerification() {
    if (VerCode === "" || VerCode.length < 6 || VerCode.length > 6) {
      return;
    } else {
      setAlert("Password Changed Successfully");
      setShowModal(false);
    }
  }
  return (
    <>
      <div className="form-holder">
        <h2>Change Password</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
            <div className="col-12">
              <input
                placeholder="Enter New Password"
                onChange={(e) => setNewPass(e.target.value)}
                type="text"
              />
            </div>
            <div className="col-12">
              <input
                placeholder="Confirm Password"
                onChange={(e) => setConfirmedPass(e.target.value)}
                type="text"
              />
            </div>
            {alert && (
              <div className="row">
                <h4
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    marginBottom: "20px",
                  }}
                  className="text-black-50"
                >
                  {alert}
                </h4>
              </div>
            )}
            <div className="col-12">
              <input value="Change Password" type="submit" />
            </div>
          </div>
        </form>
      </div>
      {showModal ? (
        <div className="Modal">
          <div className="Modal_header">
            <h4>User Verification</h4>
            <button className="Modal_close" onClick={() => setShowModal(false)}>
              ❌
            </button>
          </div>
          <div className="Modal_body">
            <form>
              <div className="row">
                <div className="col-8">
                  <h5 className="text-black" style={{ marginBottom: "20px" }}>
                    Enter Your Verification Code
                  </h5>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Enter the 6-Digits Code "
                    onChange={(e) => setVerCode(e.target.value)}
                    maxLength="6"
                    value={VerCode}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="Modal_actions">
            <button
              className="btn btn-primary"
              onClick={() => handleVerification()}
            >
              Confirm
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ConfirmPassword;

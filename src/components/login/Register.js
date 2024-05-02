import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/login.css";
function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (
      userName === "" ||
      password === "" ||
      confirmPassword === "" ||
      email === ""
    )
      return;
  }
  return (
    <div className="form-holder">
      <h2>Register Now</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter You username"
        />
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter You Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter You password"
        />
        <input
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Enter You password"
        />
        <input type="submit" value="Register" />
        have an account?<Link to="/Login">Login Now</Link>
      </form>
    </div>
  );
}

export default Register;

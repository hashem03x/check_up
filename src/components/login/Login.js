import React, { useState } from "react";
import "./css/login.css";
import { Link } from "react-router-dom";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (userName === "" || password === "") return;
  }
  return (
    <div className="form-holder">
      <h2>Login Now</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter You username"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter You password"
        />
        <input type="submit" value="Login" />
        don't have an account?<Link to="/Register">Register Now</Link>
      </form>
    </div>
  );
}

export default Login;

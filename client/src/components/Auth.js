import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Auth.css";
import { NavLink } from "react-router-dom";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [key, setKey] = useState("");
  const [invalidAuth, setinvalidAuth] = useState("");
  const [shakeEffect, setShakeEffect] = useState("");

  const userEmail = "example";
  const userPass = "example";
  const userKey = "example";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleKeyChange = (e) => {
    setKey(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent the default form submission behavior
    // You can add your validation logic here, and if it's successful, set userAuthVlaid to true
    if (email === "1" && password === "1" && key === "1") {
      localStorage.setItem("userAuthVlaid", true);
      setinvalidAuth(false);
    } else {
      setinvalidAuth(true);
      setShakeEffect("shakeAndHover");

      setTimeout(() => {
        setShakeEffect("");
      }, 600);
    }
  };

  const userAuth = () => {
    if (localStorage.getItem("userAuthVlaid") === "true") {
      return (
        <NavLink to="/Home" > 
        <button
          
          className="custom-gradient-button"
          style={{ marginLeft: "40%", marginTop: "20%" }}
        >
          Valid Enter Home
        </button>
        </NavLink>
      );
    } else {
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="AuthBox">
              <div className={shakeEffect}>
                <div className="Auth--header">Provide Auth</div>
                <div className="Auth--email">
                  <label>Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="Auth--password">
                  <label>Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="Auth--key">
                  <label>Given Key</label>
                  <input type="text" value={key} onChange={handleKeyChange} />
                </div>
                <button
                  type="submit"
                  className="custom-gradient-button"
                  style={{ marginLeft: "25%" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  };

  return (
    <div>
      <Navbar />
      {userAuth()}
    </div>
  );
}

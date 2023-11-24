import React from "react";
import "./myStyle.css";
import AiFactLogo from "./AiFact-logo.png";

const MyHeader = () => {
  return (
    <header>
      <img className="ai-logo" src={AiFactLogo} alt="AiFact Logo" />
      <h1>Welcome to AiFactor</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default MyHeader;

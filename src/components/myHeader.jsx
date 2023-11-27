import React from "react";
// import app.import './App.css';
import { Link } from "react-router-dom";
const MyHeader = () => {
  return (
    // <header>
    //   <img className="ai-logo" src={AiFactLogo} alt="AiFact Logo" />
    //   <h1>Welcome to AiFactor</h1>
    //   <nav>
    //     <ul>
    //       <li>Home</li>
    //       <li>About</li>
    //       <li>Contact</li>
    //     </ul>
    //   </nav>
    // </header>
    <header style={{ marginBottom: "100px" }}>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/conditional">Conditional</Link>
          </li>
          <li>
            <Link to="/classComp">ClassComp</Link>
          </li>
          <li>
            <Link to="/propsinConstructor">PropsinConstructor</Link>
          </li>
          <li>
            <Link to="/container">Container</Link>
          </li>
          <li>
            <Link to="/packingList">PackingList</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/teaSet">TeaSet</Link>
          </li>
          <li>
            <Link to="/toolbar">Toolbar</Link>
          </li>
          <li>
            <Link to="/gallary">Gallary</Link>
          </li>
          <li>
            <Link to="/movies">Movie</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MyHeader;

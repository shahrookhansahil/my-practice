import React from "react";
import "./App.css";
import MyHeader from "./components/myHeader";
import About from "./components/About";
export default function App() {
  return (
    <div className="App">
      <MyHeader />
      <About />
    </div>
  );
}

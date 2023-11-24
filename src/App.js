import React from "react";
import "./App.css";
import MyHeader from "./components/myHeader";
import About from "./components/About";
import PersonComponent from "./PersonComponent";
import Contact from "./components/Contact";
import Conditional from "./components/Conditional";
import ClassComp from "./components/classComp";
import PropsinConstructor from "./components/PropsinConstructor";
import Container from "./components/Container";
import PackingList from "./components/PakingList";
const App = () => {
  const name = "Sahil Mazari";
  return (
    <div className="App">
      <MyHeader />
      <PersonComponent name={name} age={24} />
      <About />
      <Contact
        name="Sahil"
        email="sahil.mazari@aifactor.ca"
        phone="+923150971929"
      />
      <Conditional />
      <ClassComp />
      <PropsinConstructor model="Hondna Bike" />

      <Container />
      <PackingList />
    </div>
  );
};

export default App;

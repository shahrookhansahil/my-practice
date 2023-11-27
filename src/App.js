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
import List from "./components/List";
import TeaSet from "./components/TeaSet";
import Toolbar from "./components/Toolbar";
import Gallary from "./components/Hooks-Component/Gallary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowMovies from "./components/Movies/ShowMovies";
// import NameProvider from "./components/providers/NameProvider";
// import NameComponent from "./components/NameComponent";
const App = () => {
  const name = "Sahil Mazari";
  return (
    <BrowserRouter>
      <MyHeader />
      <h1 style={{ margin: "80px" }}></h1>
      <Routes>
        <Route path="/" element={<MyHeader />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/contact"
          element={
            <Contact
              name="Sahil"
              email="sahil.mazari@aifactor.ca"
              phone="+923150971929"
            />
          }
        />
        <Route path="/conditional" element={<Conditional />} />
        <Route path="/classComp" element={<ClassComp />} />
        <Route
          path="/propsinConstructor"
          element={<PropsinConstructor model="Frontend Developer" />}
        />
        <Route path="/container" element={<Container />} />
        <Route path="/packingList" element={<PackingList />} />
        <Route path="/list" element={<List />} />
        <Route path="/teaSet" element={<TeaSet />} />
        <Route path="/toolbar" element={<Toolbar />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route
          path="/personComponent"
          element={<PersonComponent name={name} age={24} />}
        />
        <Route path="/movies" element={<ShowMovies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// <div className="App">
//       <MyHeader />
//       <PersonComponent name={name} age={24} />
//       <About />
//       <Contact
// name="Sahil"
// email="sahil.mazari@aifactor.ca"
// phone="+923150971929"
//       />
//       <Conditional />
//       <ClassComp />
//       <PropsinConstructor model="Hondna Bike" />

//       <Container />
//       <PackingList />
//       <List />
//       <TeaSet />

//       <Toolbar
//         onPlayMovie={() => alert("Playing!")}
//         onUploadImage={() => alert("Uploading!")}
//         onUpload={() => alert("Uploading Just!")}
//       />

//       <h1>React Hooks</h1>
//       <Gallary />
//       {/* <NameProvider>
//         <div>
//           <h1>App</h1>
//           <NameComponent />
//         </div>
//       </NameProvider> */}
//     </div>

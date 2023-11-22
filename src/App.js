import React from "react";
import "./App.css";
import MyHeader from "./components/myHeader";
import About from "./components/About";
import PersonComponent from "./PersonComponent";

const App = () => {
  const name = "Sahil Mazari";
  return (
    <div className="App">
      <MyHeader />
      <PersonComponent name={name} age={24} />
      <About />
    </div>
  );
};

export default App;

// export default function App() {
//   return (
//     <div className="App">
//       <MyHeader />
//       <About />
//     </div>
//   );
// }

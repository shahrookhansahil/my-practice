// // src/providers/NameProvider.js
// import React, { useState } from "react";
// import NameContext from "../contexts/NameContext";
// const NameProvider = ({ children }) => {
//   const [name, setName] = useState("John");

//   const updateName = (newName) => {
//     setName(newName);
//   };

//   return (
//     <NameContext.Provider value={{ name, updateName }}>
//       {children}
//     </NameContext.Provider>
//   );
// };

// export default NameProvider;

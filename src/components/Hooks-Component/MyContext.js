import React, { createContext, useContext, useState } from "react";

// Step 1: Create a context
const NameContext = createContext();

// Step 2: Create a provider
const NameProvider = ({ children }) => {
  const [name, setName] = useState("Sahil Mazari");

  const updateName = (newName) => {
    setName(newName);
  };

  return (
    <NameContext.Provider value={{ name, updateName }}>
      {children}
    </NameContext.Provider>
  );
};

// Step 3: Create components that use the context
const NameComponent = () => {
  // Step 4: Use the useContext hook to access the context value
  const { name, updateName } = useContext(NameContext);

  return (
    <div>
      <h2>Name Component</h2>
      <p>Name: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
    </div>
  );
};

const MyContext = () => {
  return (
    // Step 5: Wrap the components that need the context with the provider
    <NameProvider>
      <div>
        <h1>App</h1>
        <NameComponent />
      </div>
    </NameProvider>
  );
};

export default MyContext;

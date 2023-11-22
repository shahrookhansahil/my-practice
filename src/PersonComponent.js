import React from "react";

const PersonComponent = ({ name, age }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
};

export default PersonComponent;

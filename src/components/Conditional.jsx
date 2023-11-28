import React from "react";

function Conditional() {
  const age = 10;
  const baby = false;
  let text;

  //   if else conditional
  if (age >= 18) {
    text = "You can buy Drink but its not good for health";
  } else {
    text = "You are not allowed to buy drink!";
  }

  //    Multiline JSX

  return (
    <div>
      <h1>Conditional</h1>
      <p>
        Your components will often need to display different things depending on
        different conditions. In React, you can conditionally render JSX using
        JavaScript syntax like if statements, &&, and ? : operators.
      </p>
      <ul>
        <li>Applesauce</li>
        {!baby && <li>Pizza</li>}
        {age > 15 && <li>Brussels Sprouts</li>}
        {age > 20 && <li>Oysters</li>}
        {age > 25 && <li>Grappa</li>}
      </ul>
      {/* Ternary Operators */}
      <h1>{age > 18 ? text : text}</h1>
    </div>
  );
}

export default Conditional;

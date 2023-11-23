import React from "react";

function Conditional() {
  const age = 26;
  const baby = false;
  let text;

  //   if else conditional
  if (age >= 18) {
    text = "You can buy Drink but its not good for health";
  } else {
    text = "You are not allowed to buy drink!";
  }

  //    Multiline JSX

  const myList = (
    <ul>
      <h2>my list</h2>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
  );

  return (
    <div>
      <h1>Conditional</h1>
      <ul>
        <li>Applesauce</li>
        {!baby && <li>Pizza</li>}
        {age > 15 && <li>Brussels Sprouts</li>}
        {age > 20 && <li>Oysters</li>}
        {age > 25 && <li>Grappa</li>}
      </ul>
      {/* Ternary Operators */}
      <h1>{age > 18 ? text : text}</h1>

      {myList}
    </div>
  );
}

export default Conditional;

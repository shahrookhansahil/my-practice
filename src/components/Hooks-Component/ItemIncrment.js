import React from "react";
import { useState } from "react";
let iCounter = [0, 0, 0];
function ItemIncrment() {
  const [counter, setCounter] = useState(iCounter);
  const handleIncrement = (index) => {
    const newCounter = [...counter];
    newCounter[index] = newCounter[index] + 1;
    setCounter(newCounter);
  };
  const handleDecrement = (index) => {
    const newCounter = [...counter];
    newCounter[index] = newCounter[index] - 1;
    setCounter(newCounter);
  };
  return (
    <div>
      <h2>Item Increment</h2>
      <div>
        {counter.map((item, index) => (
          <div key={index}>
            <button onClick={() => handleIncrement(index)}>+</button>
            {item}
            <button onClick={() => handleDecrement(index)}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ItemIncrment;

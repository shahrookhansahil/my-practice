import React from "react";
import { useState } from "react";

function InputList() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  function itemEvent(event) {
    setInputList(event.target.value);
  }
  function listOfItems() {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  }

  return (
    <div>
      <input type="text" placeholder="Add a Item" onChange={itemEvent} />
      <button onClick={listOfItems}>+</button>
      <ol>
        {items.map((itemval) => {
          return <li>{itemval}</li>;
        })}
      </ol>
    </div>
  );
}

export default InputList;

import React, { useState } from "react";

let arr = [
  { id: 0, name: "Sahil" },
  { id: 1, name: "Haider" },
  { id: 2, name: "Adnan" },
];

function ListArray() {
  const [list, setList] = useState(arr);

  const handleDelete = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>List Array</h2>
      <ol>
        {list.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ol>
      <div>
        {arr.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}

export default ListArray;

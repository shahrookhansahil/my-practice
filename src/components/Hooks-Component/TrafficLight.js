import React from "react";
import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);
  const [num, setNum] = useState(0);

  function handleClick() {
    alert("The light has changed!");
    setWalk(!walk);
  }

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1
        style={{
          color: walk ? "green" : "red",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>

      <br />
      <h1 style={{ color: "blue" }}>{num}</h1>
      <button
        onClick={() => setNum(num + 1)}
        style={{ backgroundColor: "green" }}
      >
        Incr
      </button>

      <br />

      <br />
    </>
  );
}

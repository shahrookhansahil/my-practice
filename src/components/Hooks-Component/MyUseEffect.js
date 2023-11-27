import React from "react";

import { useState, useEffect } from "react";

export default function MyUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1>I've rendered {count} times!</h1>
    </>
  );
}

// Compare this snippet from src/components/Hooks-Component/Counter.js:

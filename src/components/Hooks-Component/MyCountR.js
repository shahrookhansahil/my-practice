import React from "react";
import CounterReducer from "./CounterReducer";
const MyCountR = () => {
  const [state, dispatch] = React.useReducer(CounterReducer, { count: 0 });
  return (
    <div>
      <h2>MyCountR</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};
export default MyCountR;

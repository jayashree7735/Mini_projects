import React, { useContext } from "react";
import CounterContext from "../Context/CounterContext";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Global Counter</h1>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;

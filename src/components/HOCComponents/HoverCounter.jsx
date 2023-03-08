import React from "react";
import withCounter from "./withCounter";

function HoverCounter({ count, increment }) {
  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <button onMouseOver={increment}>Inc</button>
    </div>
  );
}

export default withCounter(HoverCounter);

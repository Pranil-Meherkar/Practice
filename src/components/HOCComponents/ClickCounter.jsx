import React from "react";
import withCounter from "./withCounter";

function ClickCounter({ count, increment, name }) {
  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <button onClick={increment}>Inc</button>
      <p>{name}</p>
    </div>
  );
}

export default withCounter(ClickCounter);

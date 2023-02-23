import React from "react";
import { useState } from "react";

export default function PrevValueExample() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>inc</button>
      <button onClick={() => setCount((prev) => prev + count)}>inc + 5</button>
    </div>
  );
}

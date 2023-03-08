import React, { useState, useEffect } from "react";
import LifecycleBHooks from "./components/LifecycleBHooks";

function LifecycleAHooks() {
  const [count, setCount] = useState(0);
  const [unmount, setUnmount] = useState(false);

  useEffect(() => console.log("A component did mount"), []);
  useEffect(() =>
    count === 0
      ? console.log("A component did mount")
      : console.log("A component did update")
  );
  return (
    <>
      <h3>LifecycleA</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count : {count}
      </button>
      <button onClick={() => setUnmount((prev) => !prev)}>
        {unmount ? "Mount" : "Unmount"}
      </button>
      {!unmount && <LifecycleBHooks />}
    </>
  );
}

export default LifecycleAHooks;

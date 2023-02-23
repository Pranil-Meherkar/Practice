import React, { useState } from "react";
import DisplayText from "./DisplayText";

function PureComponentExample() {
  const [toggle, setToggle] = useState(true);
  console.log("Main App Rendered");
  return (
    <>
      <h1>Pure Component Example</h1>
      <p>Good {toggle ? "Morning" : "Evening"}</p>
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
      <DisplayText name={"Pranil"} />
    </>
  );
}

export default PureComponentExample;

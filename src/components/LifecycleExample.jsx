import React from "react";
import LifecycleA from "./LifecycleComponents/LifecycleA";
import LifecycleAHooks from "./LifecycleComponents/LifecycleAHooks";

function LifecycleExample() {
  return (
    <>
      <h1>Lifecycle Methods Example</h1>
      <LifecycleA age={22} />
      {/* <LifecycleAHooks /> */}
    </>
  );
}

export default LifecycleExample;

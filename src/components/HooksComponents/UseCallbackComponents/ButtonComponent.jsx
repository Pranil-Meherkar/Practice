import React, { memo } from "react";

function ButtonComponent({ incrementFunction, children }) {
  console.log(children + " button rendered");
  return <button onClick={incrementFunction}>{children}</button>;
}

export default memo(ButtonComponent);

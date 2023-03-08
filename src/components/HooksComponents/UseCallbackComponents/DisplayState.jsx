import React, { memo } from "react";

function DisplayState({ state, children }) {
  console.log(children + " display rendered");
  return (
    <p>
      {children} : {state}
    </p>
  );
}

export default memo(DisplayState);

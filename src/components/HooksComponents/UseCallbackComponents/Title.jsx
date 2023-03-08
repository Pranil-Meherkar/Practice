import React, { memo } from "react";

function Title() {
  console.log("Title rendered");
  return <h3>UseCallback Hook Example</h3>;
}

export default memo(Title);

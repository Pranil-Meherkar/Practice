import React, { useState, useEffect } from "react";

function LifecycleBHooks() {
  useEffect(() => console.log("B component did mount"), []);
  useEffect(() => {
    console.log("B component did update");
    return () => console.log("B component did unmount");
  });
  return (
    <>
      <h3>LifecycleB</h3>
    </>
  );
}

export default LifecycleBHooks;

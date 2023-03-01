// import UseMemo from "./UseMemo";
import React, { lazy, Suspense, useState } from "react";
import UseCallback from "./UseCallback";
import UseReducer from "./UseReducer";

const UseMemo = lazy(() => import("./UseMemo"));

function HooksExample() {
  const [showMemo, setShowMemo] = useState(false);
  return (
    <>
      <h1>Hooks Examples</h1>
      <button onClick={() => setShowMemo(!showMemo)}>
        {!showMemo ? "Show" : "Hide"} useMemo example
      </button>
      {showMemo && (
        <Suspense fallback="loading...">
          <UseMemo />
        </Suspense>
      )}

      <UseReducer />
      <UseCallback />
    </>
  );
}

export default HooksExample;

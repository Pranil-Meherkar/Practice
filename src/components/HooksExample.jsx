// import UseMemo from "./UseMemo";
import React, { lazy, Suspense } from "react";
import UseReducer from "./UseReducer";

const UseMemo = lazy(() => import("./UseMemo"));

function HooksExample() {
  return (
    <>
      <h1>Hooks Examples</h1>
      <Suspense fallback="loading...">
        <UseMemo />
      </Suspense>

      <UseReducer />
    </>
  );
}

export default HooksExample;

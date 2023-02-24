import "../App.css";
import React, { Suspense, lazy } from "react";
import Homepage from "./Homepage";

// import PrevValueExample from "./PrevValueExample";
// import HOCExample from "./HOCExample";
// import PromiseExample from "./PromiseExample";
// import PureComponentExample from "./PureComponentExample";

import { Routes, Route } from "react-router-dom";
const PrevValueExample = lazy(() => import("./PrevValueExample"));
const HOCExample = lazy(() => import("./HOCExample"));
const PromiseExample = lazy(() => import("./PromiseExample"));
const PureComponentExample = lazy(() => import("./PureComponentExample"));
const LifecycleExample = lazy(() => import("./LifecycleExample"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/prev-value-example"
          element={
            <Suspense fallback="loading...">
              <PrevValueExample />
            </Suspense>
          }
        />
        <Route
          path="/hoc-example"
          element={
            <Suspense fallback="loading...">
              <HOCExample />
            </Suspense>
          }
        />
        <Route
          path="/promise-example"
          element={
            <Suspense fallback="loading...">
              <PromiseExample />
            </Suspense>
          }
        />
        <Route
          path="/pure-component-example"
          element={
            <Suspense fallback="loading...">
              <PureComponentExample />
            </Suspense>
          }
        />
        <Route
          path="/lifecycle-example"
          element={
            <Suspense fallback="loading...">
              <LifecycleExample />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;

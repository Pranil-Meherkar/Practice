import "../App.css";
import React, { Suspense } from "react";
import Homepage from "./Homepage";

// import PrevValueExample from "./PrevValueExample";
// import HOCExample from "./HOCExample";
// import PromiseExample from "./PromiseExample";
// import PureComponentExample from "./PureComponentExample";
import { Routes, Route } from "react-router-dom";
const PrevValueExample = React.lazy(() => import("./PrevValueExample"));
const HOCExample = React.lazy(() => import("./HOCExample"));
const PromiseExample = React.lazy(() => import("./PromiseExample"));
const PureComponentExample = React.lazy(() => import("./PureComponentExample"));

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
      </Routes>
    </>
  );
}

export default App;

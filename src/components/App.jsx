import "../App.css";
import React, { Suspense, lazy } from "react";
import Homepage from "./Homepage";

// import PrevValueExample from "./PrevValueExample";
// import HOCExample from "./HOCExample";
// import PromiseExample from "./PromiseExample";
// import PureComponentExample from "./PureComponentExample";

import { Routes, Route } from "react-router-dom";
import Piano from "./Piano";
import UseSoundExample from "./UseSoundExample";
const PrevValueExample = lazy(() => import("./PrevValueExample"));
const HOCExample = lazy(() => import("./HOCExample"));
const PromiseExample = lazy(() => import("./PromiseExample"));
const PureComponentExample = lazy(() => import("./PureComponentExample"));
const LifecycleExample = lazy(() => import("./LifecycleExample"));
const HooksExample = lazy(() => import("./HooksExample"));
const LoginWithRefs = lazy(() => import("./LoginWithRefs"));
const Countries = lazy(() => import("../tasks/Countries"));
const FormikExample = lazy(() => import("./FormikExample"));
const ChartJsExample = lazy(() => import("./ChartJsExample"));
const ReactHookFormExample = lazy(() => import("./ReactHookFormExample"));

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
        <Route
          path="/hooks-example"
          element={
            <Suspense fallback="loading...">
              <HooksExample />
            </Suspense>
          }
        />
        <Route
          path="/login-refs"
          element={
            <Suspense fallback="loading...">
              <LoginWithRefs />
            </Suspense>
          }
        />
        <Route
          path="/countries"
          element={
            <Suspense fallback="loading...">
              <Countries />
            </Suspense>
          }
        />
        <Route
          path="/formik-example"
          element={
            <Suspense fallback="loading...">
              <FormikExample />
            </Suspense>
          }
        />
        <Route
          path="/chartjs-example"
          element={
            <Suspense fallback="loading...">
              <ChartJsExample />
            </Suspense>
          }
        />
        <Route
          path="/react-hook-form-example"
          element={
            <Suspense fallback="loading...">
              <ReactHookFormExample />
            </Suspense>
          }
        />
        <Route
          path="/piano"
          element={
            <Suspense fallback="loading...">
              <Piano />
            </Suspense>
          }
        />
        <Route
          path="/use-sound-example"
          element={
            <Suspense fallback="loading...">
              <UseSoundExample />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;

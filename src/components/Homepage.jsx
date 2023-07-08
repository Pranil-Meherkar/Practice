import React from "react";
import { Link } from "react-router-dom";

export default function PrevValueExample() {
  return (
    <>
      <h2>Practice</h2>
      <Link className="link" to="/prev-value-example">
        PrevValueExample
      </Link>
      <Link className="link" to="/hoc-example">
        HOCExample
      </Link>
      <Link className="link" to="/promise-example">
        PromiseExample
      </Link>
      <Link className="link" to="/pure-component-example">
        PureComponentExample
      </Link>
      <Link className="link" to="/lifecycle-example">
        LifeCycleMethodsExample
      </Link>
      <Link className="link" to="/hooks-example">
        HooksExample
      </Link>
      <Link className="link" to="/login-refs">
        Login Page using Refs
      </Link>
      <Link className="link" to="/formik-example">
        Formik Example
      </Link>
      <Link className="link" to="/chartjs-example">
        ChartJs Example
      </Link>
      <Link className="link" to="/react-hook-form-example">
        React Hook Form Example
      </Link>

      <h2>Tasks</h2>
      <Link className="link" to="/countries">
        Countries
      </Link>
    </>
  );
}

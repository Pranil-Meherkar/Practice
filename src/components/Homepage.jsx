import React from "react";
import { Link } from "react-router-dom";

export default function PrevValueExample() {
  return (
    <>
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
    </>
  );
}

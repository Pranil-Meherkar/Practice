import React from "react";
import ClickCounter from "./HOCComponents/ClickCounter";
import HoverCounter from "./HOCComponents/HoverCounter";

export default function HOCExample() {
  return (
    <>
      <ClickCounter name="Pranil" />
      <HoverCounter />
    </>
  );
}

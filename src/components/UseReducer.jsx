import React, { useReducer } from "react";

const initialState = {
  count1: 0,
  count5: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, count1: state.count1 + action.value };
    case "decrement1":
      return { ...state, count1: state.count1 - action.value };
    case "reset1":
      return { ...state, count1: initialState.count1 };
    case "increment5":
      return { ...state, count5: state.count5 + action.value };
    case "decrement5":
      return { ...state, count5: state.count5 - action.value };
    case "reset5":
      return { ...state, count5: initialState.count5 };
    default:
      return state;
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h3>useReducer Hook Example</h3>
      <h4>Inc/ Dec by 1</h4>
      <p>Count : {state.count1}</p>
      <button onClick={() => dispatch({ type: "increment1", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement1", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset1" })}>Reset</button> <br />
      <h4>Inc/ Dec by 5</h4>
      <p>Count : {state.count5}</p>
      <button onClick={() => dispatch({ type: "increment5", value: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset5" })}>Reset</button>
    </>
  );
}

export default UseReducer;

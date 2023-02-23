import React from "react";
import { PureComponent, Component } from "react";

class DisplayText extends PureComponent {
  constructor() {
    super();
  }
  render() {
    console.log("DisplayCount rendered");
    return (
      <>
        <h1>Just Displaying Some Text {this.props.name}</h1>
      </>
    );
  }
}

export default DisplayText;

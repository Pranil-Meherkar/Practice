import React from "react";
import { PureComponent } from "react";

class DisplayText extends PureComponent {
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

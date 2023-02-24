import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Pranil",
    };
    console.log("A constructor called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("A getDerivedStateFromProps called");
    return null;
  }

  componentDidMount() {
    console.log("A componentDidMount called");
  }

  shouldComponentUpdate() {
    console.log("A shouldComponentUpdate called");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("A getSnapshotBeforeUpdate called");
    return null;
  }
  componentDidUpdate() {
    console.log("A componentDidUpdate called");
  }

  handleClick = () => {
    this.setState({
      name: "Pranil Meherkar",
    });
  };
  render() {
    console.log("A render called");
    return (
      <>
        <h3>LifecycleA</h3>
        <p>Name : {this.state.name}</p>
        <button onClick={this.handleClick}>Update State</button>
        <LifecycleB />
      </>
    );
  }
}

export default LifecycleA;

import React, { Component } from "react";
import LifecycleB from "./components/LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Pranil",
      age: 0,
      gender: "",
      showText: false,
    };
    console.log("A constructor called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("A getDerivedStateFromProps called");
    return { age: props.age };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ gender: "Male" });
    }, 2000);
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
        <p style={{ display: this.state.showText ? "block" : "none" }}>
          Updated Name
        </p>
        <p>Age: {this.state.age}</p>
        <p>Gender: {this.state.gender}</p>
        <button onClick={this.handleClick}>Update State</button>
        <LifecycleB />
      </>
    );
  }
}

export default LifecycleA;

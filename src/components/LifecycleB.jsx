import React, { Component } from "react";

class lifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Pranil",
    };
    console.log("B constructor called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("B getDerivedStateFromProps called");
    return null;
  }

  componentDidMount() {
    console.log("B componentDidMount called");
  }

  shouldComponentUpdate() {
    console.log("B shouldComponentUpdate called");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("B getSnapshotBeforeUpdate called");
    return null;
  }
  componentDidUpdate() {
    console.log("B componentDidUpdate called");
  }
  render() {
    console.log("B render called");
    return <h3>lifecycleB</h3>;
  }
}

export default lifecycleB;

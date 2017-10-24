import React, { Component } from 'react';

class Module2 extends Component {
  render() {
    return (
      <p>Module 2: {this.props.foo + this.props.bar}</p>
    );
  }
}

export default Module2;

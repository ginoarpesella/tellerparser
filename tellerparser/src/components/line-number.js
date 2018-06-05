import React, { Component } from "react";

class LineNumber extends Component {
  render() {
    return (
      <span>
        <i className="fas fa-list-ol font-awesome-img" />
        {this.props.lineNumber}
      </span>
    );
  }
}

export default LineNumber;

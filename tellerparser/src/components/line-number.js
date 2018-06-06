import React, { Component } from "react";

class LineNumber extends Component {
  render() {
    return (
      <span>
        <i className="fas fa-list-ol font-awesome-img" title="line number" />
        {this.props.lineNumber + 1}
      </span>
    );
  }
}

export default LineNumber;

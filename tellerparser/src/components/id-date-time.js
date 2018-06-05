import React, { Component } from "react";
import "./compcss/id-date-time.css";

class IDDateTime extends Component {
  render() {
    return (
      <span className="info-item" title="Date and time">
        <i className="fas fa-clock font-awesome-img" />{" "}
        {this.props.dateTime.toLocaleString()}
      </span>
    );
  }
}

export default IDDateTime;

import React, { Component } from "react";
import "./compcss/id-date-time.css";

class IDDateTime extends Component {
  render() {
    return (
      <div>
        <span className="info-item" title="Drawer Id">
          <i className="fas fa-id-card font-awesome-img" />{" "}
          {this.props.drawerId}
        </span>
        <span className="info-item" title="Date and time">
          <i className="fas fa-clock font-awesome-img" /> {this.props.dateTime}
        </span>
      </div>
    );
  }
}

export default IDDateTime;

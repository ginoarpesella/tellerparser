import React, { Component } from "react";
import "./compcss/content-line.css";

class ContentLine extends Component {
  render() {
    return (
      <div>
        <span> {this.props.pos}</span>
        <span> {this.props.name}</span>
        <span>Quantity: {this.props.qty}</span>
        <span>
          <i className="fas fa-money-bill font-awesome-img" /> {this.props.val}
        </span>
      </div>
    );
  }
}

export default ContentLine;

import React, { Component } from "react";
import "./compcss/person-card.css";

class PersonCard extends Component {
  render() {
    return (
      <div className="card person-card">
        {/* image */}
        <img
          className="card-img-top rounded-circle person-card-img raised-border"
          src={this.props.img}
          alt="Card"
        />
        {/* body */}
        <div className="card-body person-card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.bio}</p>
        </div>
        {/* footer */}
        <div className="card-footer">
          <small className="text-muted">
            <a href="#" onClick={this.handleClick}>
              Send {this.props.name} a message
            </a>
          </small>
        </div>
      </div>
    );
  }

  handleClick(e) {
    e.preventDefault();
  }
}

export default PersonCard;

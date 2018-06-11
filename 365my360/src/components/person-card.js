import React, { Component } from "react";
import "./compcss/person-card.css";

class PersonCard extends Component {
  render() {
    return (
      <div className="card">
        {/* image */}
        <img
          className="card-img-top rounded-circle person-card-img"
          src={this.props.img}
          alt="Card"
        />
        {/* body */}
        <div className="card-body">
          <h5 className="card-title">[First and lastname]</h5>
          <p className="card-text">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        {/* footer */}
        <div className="card-footer">
          <small className="text-muted">
            <a href="#">Send [First and lastname] a personal message</a>
          </small>
        </div>
      </div>
    );
  }
}

export default PersonCard;

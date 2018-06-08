import React, { Component } from "react";
import "./compcss/nav-bar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark nav-bg">
        <a className="navbar-brand" href="#">
          Tellerparser
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Parser <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Live Feed
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

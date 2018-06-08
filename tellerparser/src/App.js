import React, { Component } from "react";
import "./App.css";
import "./components/compcss/nav-bar.css";
import MainParser from "./components/main-parser";
import LiveFeed from "./components/live-feed";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <form>
          <nav className="navbar navbar-expand-lg sticky-top navbar-dark nav-bg">
            <span className="navbar-brand">Tellerparser</span>
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
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Parser
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/livefeed" className="nav-link">
                    Live Feed
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path="/" component={MainParser} />
          <Route path="/livefeed" component={LiveFeed} />
        </form>
      </Router>
    );
  }
}

export default App;

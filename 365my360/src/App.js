import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/person-card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container main-content">
          <div className="row">
            <div className="col">
              <PersonCard img={"img/peteryellow.jpg"} />
            </div>
            <div className="col">
              <PersonCard img={"img/stewie.jpg"} />
            </div>
            <div className="col">
              <PersonCard img={"img/brian.jpg"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";

import * as _parer from "./scripts/parer.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.state = {
      txt: "",
      openTxt: "",
      openShow: false,
      closeTxt: "",
      closeShow: false,
      countTxt: "",
      countShow: false
    };
  }

  render() {
    return (
      <form>
        <div className="App">
          <div className="container">
            <div className="main-text">
              <textarea
                name="textarea"
                className="main-textarea form-control"
                placeholder="-- put stuff in here --"
                value={this.state.txt}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                type="button"
                ref="main_textarea"
                value="Parse"
                className="btn btn-primary btn-parse"
                onClick={this.handleClick}
              />
              <input
                type="button"
                value="Clear"
                className="btn btn-primary btn-parse"
                onClick={this.handleClear}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }

  handleChange(e) {
    let cmds = _parer.getCommands(e.target.value);
    let foundOpen = false;
    let foundClose = false;
    let foundCount = false;

    cmds.forEach(cmd => {
      if (cmd.trim().endsWith("OPEN")) {
        this.setState({ openTxt: cmd });
        foundOpen = true;
        return;
      }

      if (cmd.trim().endsWith("CLOSED")) {
        this.setState({ closeTxt: cmd });
        foundClose = true;
        return;
      }

      if (cmd.includes(";COUNT;")) {
        this.setState({ countTxt: cmd });
        foundCount = true;
      }
    });

    this.setState({ txt: e.target.value });
    if (!foundOpen) {
      this.setState({ openTxt: "" });
    }
    if (!foundClose) {
      this.setState({ closeTxt: "" });
    }
    if (!foundCount) {
      this.setState({ countTxt: "" });
    }
  }

  handleClick() {
    if (this.state.openTxt !== "") {
      this.setState({ openShow: true });
    } else {
      this.setState({ openShow: false });
    }

    if (this.state.closeTxt !== "") {
      this.setState({ closeShow: true });
    } else {
      this.setState({ closeShow: false });
    }

    if (this.state.countTxt !== "") {
      this.setState({ countShow: true });
    } else {
      this.setState({ countShow: false });
    }
  }

  handleClear() {
    let text = this.refs.main_textarea;
    text.value = "";

    this.setState({
      openShow: false,
      closeShow: false,
      countShow: false,
      openTxt: "",
      closeTxt: "",
      countTxt: "",
      txt: ""
    });
  }
}

export default App;

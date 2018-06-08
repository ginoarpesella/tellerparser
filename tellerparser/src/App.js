import React, { Component } from "react";
import "./App.css";
import DrawerEventList from "./components/drawer-event-list";
import NavBar from "./components/nav-bar";
import * as _parer from "./scripts/parer.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.state = {
      txt: "",
      sets: [],
      showEvents: false
    };
  }

  render() {
    return (
      <form>
        <NavBar />
        <div className="App">
          <div className="container">
            {this.state.showEvents ? (
              <div id="accordion" role="tablist" className="main-event-list">
                {this.state.sets.map((v, i) => {
                  return <DrawerEventList set={v} keyVal={i} key={i} />;
                })}
              </div>
            ) : null}
            <div>
              {this.state.showEvents ? (
                <input
                  type="button"
                  value="Clear"
                  className="btn btn-outline-secondary btn-parse"
                  onClick={this.handleClear}
                />
              ) : (
                <div>
                  <div className="main-text">
                    <textarea
                      name="textarea"
                      className="main-textarea form-control"
                      placeholder="-- put stuff in here --"
                      value={this.state.txt}
                      onChange={this.handleChange}
                    />
                  </div>
                  <input
                    type="button"
                    ref="main_textarea"
                    value="Parse"
                    className="btn btn-outline-secondary btn-parse"
                    onClick={this.handleClick}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    );
  }

  handleChange(e) {
    this.setState({ txt: e.target.value });
    let sets = _parer.parserTxt(e.target.value);
    this.setState({ sets: sets });
  }

  handleClick() {
    if (this.state.sets !== undefined && this.state.sets.length > 0) {
      this.setState({ showEvents: true });
    } else {
      this.setState({ showEvents: false });
    }
  }

  handleClear() {
    this.setState({
      txt: "",
      showEvents: false
    });
  }
}

export default App;

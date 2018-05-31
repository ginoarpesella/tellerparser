import React, { Component } from 'react';
import './App.css';
import DrawerOpenClose from './components/drawer-open-close';
import DrawerCount from './components/drawer-count';
import * as _parer from './scripts/parer.js';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      txt: '',
      openTxt: '',
      closeTxt: '',
      countTxt: ''
    };

  }
  render() {
    return (
      <form>
        <div className="App">
          <header className="App-header">
            <h1>Telle-Parser</h1>
          </header>
          <div className="container-fluid">
            <div className="main-info">
              <div className="row">
                <div id="drawer-open-info" className="col"></div>
                <div id="drawer-close-info" className="col"></div>
              </div>
              <div id="drawer-count"></div>
            </div>
            <div className="main-text">
              <textarea name="textarea" className="main-textarea form-control" value={this.state.txt} onChange={this.handleChange}></textarea>
            </div>
            <div>
              <input type="button" value="Parse" className="btn btn-primary btn-parse" onClick={this.handleClick}></input>
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
      if (cmd.endsWith('OPEN')) {
        this.setState({ openTxt: cmd });
        foundOpen = true;
        return;
      }

      if (cmd.endsWith('CLOSED')) {
        this.setState({ closeTxt: cmd });
        foundClose = true;
        return;
      }

      if (cmd.includes(';COUNT;')) {
        this.setState({ countTxt: cmd });
        foundCount = true;
      }
    });

    this.setState({ txt: e.target.value });
    if (!foundOpen) { this.setState({ openTxt: '' }) };
    if (!foundClose) { this.setState({ closeTxt: '' }) };
    if (!foundCount) { this.setState({ countTxt: '' }) };
  }

  handleClick() {
    if (this.state.openTxt !== '') {
      const elementOpen = <DrawerOpenClose txt={this.state.openTxt} classStyle="open-drawer" />
      ReactDOM.render(
        elementOpen,
        document.getElementById('drawer-open-info')
      );
    }
    else {
      ReactDOM.unmountComponentAtNode(document.getElementById('drawer-open-info'));
    }

    if (this.state.closeTxt !== '') {
      const elementClose = <DrawerOpenClose txt={this.state.closeTxt} classStyle="close-drawer" />
      ReactDOM.render(
        elementClose,
        document.getElementById('drawer-close-info')
      );
    }
    else {
      ReactDOM.unmountComponentAtNode(document.getElementById('drawer-close-info'));
    }

    if (this.state.countTxt !== '') {
      const elementCount = <DrawerCount txt={this.state.countTxt} classStyle="count-drawer" />
      ReactDOM.render(
        elementCount,
        document.getElementById('drawer-count')
      );
    }
    else {
      ReactDOM.unmountComponentAtNode(document.getElementById('drawer-count'));
    }
  }
}

export default App;

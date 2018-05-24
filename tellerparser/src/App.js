import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Telle-Parser</h1>
        </header>
        <div className="main-info">
          <div id='open-drawer'>
            main info
          </div>
        </div>
        <div>
          <textarea className="main-textarea" id="main-text"></textarea>
        </div>
        <div>
          <Button variant="raised" color="primary" id="btn_parser">
            Parse
          </Button>
        </div>
      </div>
    );
  }
}

export default App;

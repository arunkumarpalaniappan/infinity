import React, { Component } from 'react';
import logo from './logo.svg';
import './css/custom.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Under Development - Know more about <a href="http://akrp.me">Author</a></h1>
        </header>
      </div>
    );
  }
}

export default App;

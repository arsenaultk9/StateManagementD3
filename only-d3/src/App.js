import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ScrollComponent from "./chart/controls/scroll/ScrollComponent.js";
import ChartBootstrapper from './chart/ChartBootstrapper.js';

ChartBootstrapper.getInstance().drawChart();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">D3 State Management</h1>
        </header>

        <ScrollComponent />
      </div>
    );
  }
}

export default App;

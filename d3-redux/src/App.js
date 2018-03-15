import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ScrollComponent from "./chart/controls/scroll/ScrollComponent.js";
import ChartBootstrapper from './chart/ChartBootstrapper.js';

const chartBootstrapper = new ChartBootstrapper();
chartBootstrapper.drawChart();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">D3 State Management (Redux)</h1>
        </header>

        <ScrollComponent />
      </div>
    );
  }
}

export default App;

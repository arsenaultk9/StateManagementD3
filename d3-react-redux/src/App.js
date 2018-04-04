import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ScrollComponent from "./chart/controls/scroll/ScrollComponent.js";
import ChartComponent from "./chart/ChartComponent.js";

import * as ChartDataActions from "./actions/ChartDataActions.js";
import store from "./Store.js";
store.dispatch(ChartDataActions.getChartData());

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">D3 State Management (React/Redux)</h1>
        </header>

        <ScrollComponent />
        <ChartComponent />
      </div>
    );
  }
}

export default App;

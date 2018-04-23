// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// import { Provider } from "react-redux";

// import Store from "./Store.js";

// ReactDOM.render(
//     <Provider store={Store}>
//         <App />
//     </Provider>,
//     document.getElementById('root'));

// registerServiceWorker();


import { AppRegistry } from 'react-native';
import App from './components/App';

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root')
});
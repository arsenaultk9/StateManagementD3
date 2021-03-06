import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import Thunk from "redux-thunk";
import Logger from "redux-logger";

import ChartDataReducer from "./reducers/ChartDataReducer.js";
import ChartSettingsReducer from "./reducers/ChartSettingsReducer.js";

const chartAppReducers = combineReducers({
    chartDataReducer: ChartDataReducer,
    chartSettingsReducer: ChartSettingsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(chartAppReducers, composeEnhancers(applyMiddleware(Thunk, Logger)));
export default store;
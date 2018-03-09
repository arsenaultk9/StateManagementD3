import { createStore, applyMiddleware, combineReducers } from "redux";
import Thunk from "redux-thunk";
import Logger from "redux-logger";

import ChartDataReducer from "./reducers/ChartDataReducer.js";

const chartAppReducers = combineReducers({
    chartDataReducer: ChartDataReducer
});

let store = createStore(chartAppReducers, applyMiddleware(Thunk, Logger));
export default store;
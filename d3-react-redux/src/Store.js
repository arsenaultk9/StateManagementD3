import { createStore, applyMiddleware, combineReducers } from "redux";
import Thunk from "redux-thunk";
import Logger from "redux-logger";

import ChartDataReducer from "./reducers/ChartDataReducer.js";
import ChartSettingsReducer from "./reducers/ChartSettingsReducer.js";

const chartAppReducers = combineReducers({
    chartDataReducer: ChartDataReducer,
    chartSettingsReducer: ChartSettingsReducer
});

let store = createStore(chartAppReducers, applyMiddleware(Thunk, Logger));
export default store;
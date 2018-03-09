import Promise from "../utilities/Promise.js";
import ActionTypes from "../domain/ActionTypes.js";
import * as ChartDataServices from "../domain/ChartDataServices.js";

function setChartData(chartData) {
    return {
        type: ActionTypes.SET_CHART_DATA,
        chartData: chartData
    }
}

function getChartData(dispatch) {
    return function(dispatch) {
        const promise = new Promise(ChartDataServices.getChartData);

        promise.then((chartData) => {
            return dispatch(setChartData(chartData));
        })
    }
}

export { getChartData }
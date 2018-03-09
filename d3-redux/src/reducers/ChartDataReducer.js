import ActionTypes from "../domain/ActionTypes.js";

const initialState = {
    chartData: [],
    shownData: []
}

const chartDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_CHART_DATA:
            const lowerBound = parseInt(action.chartData.length / 4, 10);
            const upperBound = parseInt(action.chartData.length / 2, 10);

            const chartData = action.chartData;
            const shownData = chartData.slice(lowerBound, upperBound);

            return Object.assign({}, state, {
                chartData: chartData,
                shownData: shownData
            });
        default:
            return state;
    }
}

export default chartDataReducer;
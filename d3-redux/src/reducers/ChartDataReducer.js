import ActionTypes from "../domain/ActionTypes.js";

const initialState = {
    chartData: [],
    shownData: [],
    lowerBound: 0,
    upperBound: 0
}

const chartDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_CHART_DATA:
            const lowerBound = parseInt(action.chartData.length / 4, 10);
            const upperBound = parseInt(action.chartData.length / 2, 10);

            const chartData = action.chartData;

            return Object.assign({}, state, {
                chartData: chartData,
                shownData: chartData.slice(lowerBound, upperBound),
                lowerBound: lowerBound,
                upperBound: upperBound
            });

        case ActionTypes.MOVE_LEFT:
            const leftLowerBound = state.lowerBound - 1;
            const leftUpperBound = state.upperBound - 1;

            return Object.assign({}, state, {
                shownData: state.chartData.slice(leftLowerBound, leftUpperBound),
                lowerBound: leftLowerBound,
                upperBound: leftUpperBound
            });

        case ActionTypes.MOVE_RIGHT:
            const rightLowerBound = state.lowerBound + 1;
            const rightUpperBound = state.upperBound + 1;

            return Object.assign({}, state, {
                shownData: state.chartData.slice(rightLowerBound, rightUpperBound),
                lowerBound: rightLowerBound,
                upperBound: rightUpperBound
            });

        default:
            return state;
    }
}

export default chartDataReducer;
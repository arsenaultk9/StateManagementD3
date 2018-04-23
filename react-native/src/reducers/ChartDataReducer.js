import ActionTypes from "../domain/ActionTypes.js";
import * as ChartDomainFactory from "../domain/ChartDomainFactory.js";
import * as ChartDataFactory from "../domain/ChartDataFactory.js";

const initialState = {
    chartData: [],
    shownData: [],
    lowerBound: 0,
    upperBound: 0,
    x: undefined,
    y: undefined
}

const chartDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_CHART_DATA:
            const lowerBound = parseInt(action.chartData.length / 4, 10);
            const upperBound = parseInt(action.chartData.length / 2, 10);

            const chartData = action.chartData;
            const shownData = chartData.slice(lowerBound, upperBound);
            const domain = ChartDomainFactory.getChartDomain(shownData);

            return Object.assign({}, state, {
                chartData: chartData,
                shownData: shownData,
                lowerBound: lowerBound,
                upperBound: upperBound,
                x: domain.x,
                y: domain.y
            });

        case ActionTypes.MOVE_LEFT:
            return ChartDataFactory.getChartDataFromBounds(state, state.lowerBound - 1, state.upperBound - 1);

        case ActionTypes.MOVE_RIGHT:
            return ChartDataFactory.getChartDataFromBounds(state, state.lowerBound + 1, state.upperBound + 1);

        default:
            return state;
    }
}

export default chartDataReducer;
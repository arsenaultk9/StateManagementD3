import * as ChartDomainFactory from "./ChartDomainFactory.js";

const getChartDataFromBounds = (previousState, lowerBound, upperBound) => {
    const shownData = previousState.chartData.slice(lowerBound, upperBound);
    const domain = ChartDomainFactory.getChartDomain(shownData);

    return Object.assign({}, previousState, {
        shownData: shownData,
        lowerBound: lowerBound,
        upperBound: upperBound,
        x: domain.x,
        y: domain.y
    });
}

export { getChartDataFromBounds }
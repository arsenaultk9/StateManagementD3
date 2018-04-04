import * as d3 from "d3";
import ChartGlobal from "./ChartGlobal.js";

const chartGlobal = new ChartGlobal();

const getChartDomain = (shownData) => {
    const x = d3.scaleBand().range([0, chartGlobal.width]).round(.05);
    const y = d3.scaleLinear().range([chartGlobal.height, 0]);

    x.domain(shownData.map(function (d) { return d.date; }));
    y.domain([0, d3.max(shownData, function (d) { return d.value; })]);

    return {
        x: x,
        y: y
    }
}

export { getChartDomain }
import * as d3 from "d3";
import store from "../Store.js";

class ChartAxes {
  constructor(chartGlobal, svg) {
    this.chartGlobal = chartGlobal;

    this.svgXAxis = svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + this.chartGlobal.height + ")");

    this.svgYAxis = svg.append("g")
      .attr("class", "y axis");

    this.connectToStore();
  }

  connectToStore() {
    store.subscribe(() => {
      const chartDataReducer = store.getState().chartDataReducer;
      this.draw(chartDataReducer.shownData, chartDataReducer.x, chartDataReducer.y);
    });
  }

  draw(data, x, y) {
    x.domain(data.map(function (d) { return d.date; }));
    y.domain([0, d3.max(data, function (d) { return d.value; })]);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y).ticks(10);

    this.svgXAxis.call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)");

    this.svgYAxis.call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Value ($)");
  }
}

export default ChartAxes;
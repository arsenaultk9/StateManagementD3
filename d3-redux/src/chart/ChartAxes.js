import * as d3 from "d3";
import store from "../Store.js";
import * as ChartDomainFactory from "./ChartDomainFactory.js";

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
      const shownData = store.getState().chartDataReducer.shownData;
      this.draw(shownData);
    });
  }

  draw(data) {
    const chartDomain = ChartDomainFactory.getChartDomain(data);

    chartDomain.x.domain(data.map(function (d) { return d.date; }));
    chartDomain.y.domain([0, d3.max(data, function (d) { return d.value; })]);

    const xAxis = d3.axisBottom(chartDomain.x);
    const yAxis = d3.axisLeft(chartDomain.y).ticks(10);

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
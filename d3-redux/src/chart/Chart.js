import * as d3 from "d3";

import store from "../Store.js";
import ChartGlobal from "./ChartGlobal.js";
import ChartAxes from "./ChartAxes.js";

class Chart {
  constructor() {
    this.chartGlobal = new ChartGlobal();

    this.svg = this.createSvg();
    this.chartAxes = new ChartAxes(this.chartGlobal, this.svg);

    this.connectToStore();
  }

  createSvg() {
    return d3.select("body").append("svg")
      .attr("width", this.chartGlobal.width + this.chartGlobal.margin.left + this.chartGlobal.margin.right)
      .attr("height", this.chartGlobal.height + this.chartGlobal.margin.top + this.chartGlobal.margin.bottom)
      .attr("class", "Chart")
      .append("g")
      .attr("transform",
        "translate(" + this.chartGlobal.margin.left + "," + this.chartGlobal.margin.top + ")");
  }

  connectToStore() {
    store.subscribe(() => {
      const chartDataReducer = store.getState().chartDataReducer;
      this.draw(chartDataReducer.shownData, chartDataReducer.x, chartDataReducer.y);
    });
  }

  draw(shownData, x, y) {
    const barData = this.svg.selectAll("rect")
      .data(shownData, (d) => d.date);

    barData.exit().remove();

    barData
      .enter()
      .append("rect")
      .attr("class", "Chart-bar")
      .merge(barData)
      .attr("x", (d) => { return x(d.date) + 1; })
      .attr("width", x.bandwidth() - 1)
      .attr("y", (d) => { return y(d.value); })
      .attr("height", (d) => { return this.chartGlobal.height - y(d.value); });
  }
}

export default Chart;
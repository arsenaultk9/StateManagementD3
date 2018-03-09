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
      .append("g")
      .attr("transform",
        "translate(" + this.chartGlobal.margin.left + "," + this.chartGlobal.margin.top + ")");
  }

  connectToStore() {
    store.subscribe(() => {
      const shownData = store.getState().chartDataReducer.shownData;
      this.draw(shownData);
    });
  }

  draw(shownData) {
    this.chartAxes.draw(shownData);

    const barData = this.svg.selectAll("rect")
      .data(shownData, (d) => d.date);

    barData.exit().remove();

    barData
      .enter()
      .append("rect")
      .attr("class", "Chart-bar")
      .merge(barData)
      .attr("x", (d) => { return this.chartAxes.x(d.date) + 1; })
      .attr("width", this.chartAxes.x.bandwidth() - 1)
      .attr("y", (d) => { return this.chartAxes.y(d.value); })
      .attr("height", (d) => { return this.chartGlobal.height - this.chartAxes.y(d.value); });
  }
}

export default Chart;
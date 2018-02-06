import * as d3 from "d3";

import ChartGlobal from "./ChartGlobal.js";
import ChartAxes from "./ChartAxes.js";

class Chart {
  constructor(data) {
    this.data = data;

    this.chartGlobal = new ChartGlobal();
    this.chartAxes = new ChartAxes(this.chartGlobal);
  }

  draw() {
    var svg = d3.select("body").append("svg")
    .attr("width", this.chartGlobal.width + this.chartGlobal.margin.left + this.chartGlobal.margin.right)
    .attr("height", this.chartGlobal.height + this.chartGlobal.margin.top + this.chartGlobal.margin.bottom)
    .append("g")
    .attr("transform", 
          "translate(" + this.chartGlobal.margin.left + "," + this.chartGlobal.margin.top + ")");
    
    this.chartAxes.draw(svg, this.data);
    
    svg.selectAll("bar")
      .data(this.data)
    .enter().append("rect")
      .attr("class", "Chart-bar")
      .attr("x", (d) => { return this.chartAxes.x(d.date) + 1; })
      .attr("width", this.chartAxes.x.bandwidth() - 1)
      .attr("y", (d) => { return this.chartAxes.y(d.value); })
      .attr("height", (d) => { return this.chartGlobal.height - this.chartAxes.y(d.value); });
  }
}

export default Chart;









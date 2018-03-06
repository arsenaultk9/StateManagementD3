import * as d3 from "d3";

class ChartAxes {
  constructor(chartGlobal, svg) {
    this.chartGlobal = chartGlobal;

    this.x = d3.scaleBand().range([0, this.chartGlobal.width]).round(.05);
    this.y = d3.scaleLinear().range([this.chartGlobal.height, 0]);

    this.xAxis = d3.axisBottom(this.x);
    this.yAxis = d3.axisLeft(this.y).ticks(10);

    this.svgXAxis = svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + this.chartGlobal.height + ")");

    this.svgYAxis = svg.append("g")
      .attr("class", "y axis");
  }

  draw(data) {
    this.x.domain(data.map(function (d) { return d.date; }));
    this.y.domain([0, d3.max(data, function (d) { return d.value; })]);

    this.xAxis = d3.axisBottom(this.x);
    this.yAxis = d3.axisLeft(this.y).ticks(10);

    this.svgXAxis.call(this.xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)");

    this.svgYAxis.call(this.yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Value ($)");
  }
}

export default ChartAxes;
import * as d3 from "d3";

class ChartAxes {
  constructor(chartGlobal) {
    this.chartGlobal = chartGlobal;

    this.x = d3.scaleBand().range([0, this.chartGlobal.width]).round(.05);
    this.y = d3.scaleLinear().range([this.chartGlobal.height, 0]);

    this.xAxis = d3.axisBottom(this.x);//.tickFormat(parseDate);
    this.yAxis = d3.axisLeft(this.y).ticks(10);
  }

  draw(svg, data) {
    this.x.domain(data.map(function (d) { return d.date; }));
    this.y.domain([0, d3.max(data, function (d) { return d.value; })]);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + this.chartGlobal.height + ")")
      .call(this.xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)");

    svg.append("g")
      .attr("class", "y axis")
      .call(this.yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Value ($)");
  }
}

export default ChartAxes;
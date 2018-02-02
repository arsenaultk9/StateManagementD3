import * as d3 from "d3";

import ChartGlobal from "./ChartGlobal.js";
import data from "./bar-data.js";

var chartGlobal = new ChartGlobal();

// Parse the date / time
function parseDate(date) { 
  return d3.timeFormat(date, "%Y-%m")() }

  data.forEach(function(d) {
    d.date = parseDate(d.date);
    d.value = +d.value;
});

var x = d3.scaleBand().range([0, chartGlobal.width]).round(.05);
var y = d3.scaleLinear().range([chartGlobal.height, 0]);

var xAxis = d3.axisBottom(x).tickFormat(parseDate);
var yAxis = d3.axisLeft(y).ticks(10);

var svg = d3.select("body").append("svg")
.attr("width", chartGlobal.width + chartGlobal.margin.left + chartGlobal.margin.right)
.attr("height", chartGlobal.height + chartGlobal.margin.top + chartGlobal.margin.bottom)
.append("g")
.attr("transform", 
      "translate(" + chartGlobal.margin.left + "," + chartGlobal.margin.top + ")");

x.domain(data.map(function(d) { return d.date; }));
y.domain([0, d3.max(data, function(d) { return d.value; })]);

svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + chartGlobal.height + ")")
  .call(xAxis)
.selectAll("text")
  .style("text-anchor", "end")
  .attr("dx", "-.8em")
  .attr("dy", "-.55em")
  .attr("transform", "rotate(-90)" );

svg.append("g")
  .attr("class", "y axis")
  .call(yAxis)
.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", ".71em")
  .style("text-anchor", "end")
  .text("Value ($)");

svg.selectAll("bar")
  .data(data)
.enter().append("rect")
  .style("fill", "steelblue")
  .attr("x", function(d) { return x(d.date); })
  .attr("width", x.bandwidth())
  .attr("y", function(d) { return y(d.value); })
  .attr("height", function(d) { return chartGlobal.height - y(d.value); });

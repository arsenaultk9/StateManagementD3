import * as d3 from "d3";

import ChartGlobal from "./ChartGlobal.js";
import ChartAxes from "./ChartAxes.js";
import data from "./bar-data.js";
import {parseDate} from "../utilities/DateHelper.js";

var chartGlobal = new ChartGlobal();
var chartAxes = new ChartAxes(chartGlobal);



data.forEach(function(d) {
    d.date = parseDate(d.date);
    d.value = +d.value;
});



var svg = d3.select("body").append("svg")
.attr("width", chartGlobal.width + chartGlobal.margin.left + chartGlobal.margin.right)
.attr("height", chartGlobal.height + chartGlobal.margin.top + chartGlobal.margin.bottom)
.append("g")
.attr("transform", 
      "translate(" + chartGlobal.margin.left + "," + chartGlobal.margin.top + ")");

chartAxes.draw(svg, data);

svg.selectAll("bar")
  .data(data)
.enter().append("rect")
  .style("fill", "steelblue")
  .attr("x", function(d) { return chartAxes.x(d.date); })
  .attr("width", chartAxes.x.bandwidth())
  .attr("y", function(d) { return chartAxes.y(d.value); })
  .attr("height", function(d) { return chartGlobal.height - chartAxes.y(d.value); });

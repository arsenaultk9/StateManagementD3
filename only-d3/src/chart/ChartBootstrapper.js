import data from "./bar-data.js";
import {parseDate} from "../utilities/DateHelper.js";
import Chart from "./Chart.js";

data.forEach(function(d) {
    d.date = parseDate(d.date);
    d.value = +d.value;
});

const chart = new Chart(data);
chart.draw();
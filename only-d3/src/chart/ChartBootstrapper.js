import Promise from "../utilities/Promise.js";
import * as ChartDataServices from "../domain/ChartDataServices.js";
import Chart from "./Chart.js";

const promise = new Promise(ChartDataServices.getChartData)
promise.then((data) => {
    const chart = new Chart(data);
    chart.draw();
});

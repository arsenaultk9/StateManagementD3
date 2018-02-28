import Promise from "../utilities/Promise.js";
import * as ChartDataServices from "../domain/ChartDataServices.js";
import Chart from "./Chart.js";
import ScrollController from "./controls/scroll/ScrollController.js";

let instance = null;

class ChartBootstrapper {
    constructor() {
        this.scrollController = undefined;
    }

    drawChart() {
        const promise = new Promise(ChartDataServices.getChartData);

        promise.then((chartData) => {
            const chart = new Chart(chartData);
            chart.draw();

            this.scrollController = new ScrollController(chartData);
        });
    }

    static getInstance() {
        if (!instance) {
            instance = new ChartBootstrapper();
        }

        return instance;
    }
}

export default ChartBootstrapper;


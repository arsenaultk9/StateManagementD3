import Promise from "../utilities/Promise.js";

import * as ChartDataServices from "../domain/ChartDataServices.js";
import Chart from "./Chart.js";
import ScrollController from "./controls/scroll/ScrollController.js";

let instance = null;

class ChartBootstrapper {
    constructor() {
        this.scrollViewModel = undefined;
        this.scrollController = undefined;
    }

    drawChart() {
        const promise = new Promise(ChartDataServices.getChartData);

        promise.then((chartData) => {
            const lowerBound = parseInt(chartData.length / 4, 10);
            const upperBound = parseInt(chartData.length / 2, 10);

            this.scrollController = new ScrollController(lowerBound, upperBound);

            const chart = new Chart(chartData, lowerBound, upperBound);
            chart.draw();
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


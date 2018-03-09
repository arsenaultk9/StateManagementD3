import Chart from "./Chart.js";

import store from "../Store.js";
import * as ChartDataActions from "../actions/ChartDataActions.js";

let instance = null;

class ChartBootstrapper {
    constructor() {
        this.chart = new Chart();
    }

    drawChart() {
        store.dispatch(ChartDataActions.getChartData());
    }

    static getInstance() {
        if (!instance) {
            instance = new ChartBootstrapper();
        }

        return instance;
    }
}

export default ChartBootstrapper;


import Chart from "./Chart.js";

import store from "../Store.js";
import * as ChartDataActions from "../actions/ChartDataActions.js";

class ChartBootstrapper {
    constructor() {
        this.chart = new Chart();
    }

    drawChart() {
        store.dispatch(ChartDataActions.getChartData());
    }
}

export default ChartBootstrapper;


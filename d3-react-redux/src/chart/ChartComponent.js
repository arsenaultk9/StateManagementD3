import React, { Component } from 'react';

import ChartGlobal from "./ChartGlobal.js";
import ChartAxesComponent from "./ChartAxesComponent.js";
import ChartDataComponent from "./ChartDataComponent.js";

class ChartComponent extends Component {
    constructor() {
        super();
        this.chartGlobal = new ChartGlobal();

        this.chartWidth = this.chartGlobal.width + this.chartGlobal.margin.left + this.chartGlobal.margin.right;
        this.chartHeight = this.chartGlobal.height + this.chartGlobal.margin.top + this.chartGlobal.margin.bottom;
    }

    render() {
        return (
            <svg width={this.chartWidth} height={this.chartHeight} >
                <g transform={"translate(" + this.chartGlobal.margin.left + "," + this.chartGlobal.margin.top + ")"}>
                    <ChartAxesComponent />
                    <ChartDataComponent />
                </g>
            </svg>
        )
    }
}

export default ChartComponent;
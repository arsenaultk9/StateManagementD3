import React, { Component } from "react";
import { connect } from "react-redux";

import ChartAxesComponent from "./axes/ChartAxesComponent.js";
import ChartDataComponent from "./data/ChartDataComponent.js";

class ChartComponent extends Component {
    constructor(props) {
        super(props);

        this.chartSettings = this.props.chartSettings;
        this.chartWidth = this.chartSettings.width + this.chartSettings.margin.left + this.chartSettings.margin.right;
        this.chartHeight = this.chartSettings.height + this.chartSettings.margin.top + this.chartSettings.margin.bottom;
    }

    render() {
        return (
            <svg width={this.chartWidth} height={this.chartHeight} shape-rendering="crispEdges">
                <g transform={"translate(" + this.chartSettings.margin.left + "," + this.chartSettings.margin.top + ")"}>
                    <ChartAxesComponent />
                    <ChartDataComponent />
                </g>
            </svg>
        )
    }
}

const mapStateToProps = storeState => {
    return {
        chartSettings: storeState.chartSettingsReducer
    }
}

const ChartContainer = connect(mapStateToProps)(ChartComponent);
export default ChartContainer;
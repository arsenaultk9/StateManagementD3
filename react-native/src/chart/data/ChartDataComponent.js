import React, { Component } from "react";
import { connect } from "react-redux";

import ChartBarComponent from "./ChartBarComponent.js";

class ChartDataComponent extends Component {
    render() {
        const chartBars = this.props.shownData.map((data) => (
            <ChartBarComponent key={"bar" + data.date} data={data} x={this.props.x} y={this.props.y} chartSettings={this.props.chartSettings} />
        ));

        return (
            <g transform={"translate(0," + this.props.chartSettings.height + ")"}>
                {chartBars}
            </g>
        )
    }
}

const mapStateToProps = storeState => {
    return {
        shownData: storeState.chartDataReducer.shownData,
        x: storeState.chartDataReducer.x,
        y: storeState.chartDataReducer.y,
        chartSettings: storeState.chartSettingsReducer
    }
}

const ChartDataContainer = connect(mapStateToProps)(ChartDataComponent);
export default ChartDataContainer;
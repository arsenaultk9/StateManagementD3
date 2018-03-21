import React, { Component } from "react";
import { connect } from "react-redux";

import BottomChartComponent from "./BottomChartComponent.js";
import LeftChartComponent from "./LeftChartComponent.js";

class ChartAxesComponent extends Component {
    render() {
        return (
            <g transform={"translate(0," + this.props.chartSettings.height + ")"}>
                <LeftChartComponent shownData={this.props.shownData} y={this.props.y} chartSettings={this.props.chartSettings} />
                <BottomChartComponent shownData={this.props.shownData} x={this.props.x} chartSettings={this.props.chartSettings} />
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

const ChartAxesContainer = connect(mapStateToProps)(ChartAxesComponent);
export default ChartAxesContainer;
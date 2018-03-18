import React, { Component } from "react";
import { connect } from "react-redux";

import BottomChartComponent from "./BottomChartComponent.js";

class ChartAxesComponent extends Component {
    render() {
        return (
            <g transform={"translate(0," + this.props.chartSettings.height + ")"}>
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
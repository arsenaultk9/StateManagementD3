import React, { Component } from 'react';
import { connect } from "react-redux";

class ChartAxesComponent extends Component {
    render() {
        return (
            <g>

            </g>
        )
    }
}

const mapStateToProps = storeState => {
    return {
        shownData: storeState.chartDataReducer.shownData,
        x: storeState.chartDataReducer.x,
        y: storeState.chartDataReducer.y,
    }
}

const ChartAxesContainer = connect(mapStateToProps)(ChartAxesComponent);
export default ChartAxesContainer;
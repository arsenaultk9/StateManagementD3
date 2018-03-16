import React, {Component} from "react";
import { connect } from "react-redux";

class ChartDataComponent extends Component {
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

const ChartDataContainer = connect(mapStateToProps)(ChartDataComponent);
export default ChartDataContainer;
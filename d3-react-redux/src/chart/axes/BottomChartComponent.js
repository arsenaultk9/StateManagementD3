import React, { Component } from "react";
import BottomChartTickComponent from "./BottomChartTickComponent.js";

class BottomChartComponent extends Component {
    render() {
        const bottomTicks = this.props.shownData.map(data => (
            <BottomChartTickComponent data={data} x={this.props.x} />
        ));

        return (
            <g>
                <line 
                className="Chart-line"
                x1={0}
                x2 = {this.props.chartSettings.width} 
                y1={0}
                y2={0}/>

                {bottomTicks}
            </g>
        )
    }
}

export default BottomChartComponent;
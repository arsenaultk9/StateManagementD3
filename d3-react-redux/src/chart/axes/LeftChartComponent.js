import React, { Component } from "react";
import LeftChartTickComponent from "./LeftChartTickComponent.js";

class LeftChartComponent extends Component {
    render() {
        const bottomTicks = this.props.shownData.map(data => (
            <LeftChartTickComponent data={data} y={this.props.y} />
        ));

        return (
            <g>
                <line 
                className="Chart-line"
                x1={0}
                x2 = {0} 
                y1={0}
                y2={-this.props.chartSettings.height}/>

                {bottomTicks}
            </g>
        )
    }
}

export default LeftChartComponent;
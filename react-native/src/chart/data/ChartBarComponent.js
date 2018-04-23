import React, { Component } from "react";

class ChartBarComponent extends Component {
    render() {
        const xPos = this.props.x(this.props.data.date);
        const width = this.props.x.bandwidth();

        const height = this.props.chartSettings.height - this.props.y(this.props.data.value);
        const yPos = -height;

        return (
            <g>
                <rect
                    className="Chart-bar"
                    x={xPos}
                    y={yPos}
                    width={width}
                    height={height} />

            </g>
        )
    }
}

export default ChartBarComponent;
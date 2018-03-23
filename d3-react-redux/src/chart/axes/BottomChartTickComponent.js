import React, { Component } from "react";

class BottomChartTickComponent extends Component {
    render() {
        const xPos = this.props.x(this.props.data.date) + (this.props.x.bandwidth() / 2);
        const textXPos = xPos + 4;

        return (
            <g id={"bottomChartTick" + this.props.data.date }>
                <line
                    className="Chart-line"
                    x1={xPos}
                    x2={xPos}
                    y1={0}
                    y2={5} />

                <text
                    className="Chart-text"
                    x={textXPos}
                    y={5}
                    transform={"rotate(-90, " + textXPos + ", 0)"}
                    dx={"-.8em"}
                    dy={"-.55em"}>
                    {this.props.data.date}
                </text>
            </g>
        )
    }
}

export default BottomChartTickComponent;
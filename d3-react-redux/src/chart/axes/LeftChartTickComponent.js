import React, { Component } from "react";

class LeftChartTickComponent extends Component {
    render() {
        const yPos = -this.props.y(this.props.tick) - 3;
        const textYPos = yPos + 9;

        return (
            <g id={"leftChartTick" + this.props.tick }>
                <line
                    className="Chart-line"
                    x1={-5}
                    x2={0}
                    y1={yPos}
                    y2={yPos} />

                <text
                    className="Chart-text"
                    x={-5}
                    y={textYPos}
                    dx={"-.8em"}
                    dy={"-.55em"}>

                    {parseInt(this.props.highestTick, 10) - parseInt(this.props.tick, 10) }
                </text>
            </g>
        )
    }
}

export default LeftChartTickComponent;
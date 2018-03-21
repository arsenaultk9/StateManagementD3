import React, { Component } from "react";

class LeftChartTickComponent extends Component {
    render() {
        const yPos = -this.props.y(this.props.data.value);
        const textXPos = yPos + 4;

        return (
            <g id={"leftChartTick" + this.props.data.value }>
                <line
                    className="Chart-line"
                    x1={-5}
                    x2={0}
                    y1={yPos}
                    y2={yPos} />

                {/* <text
                    className="Chart-text"
                    x={textXPos}
                    y={5}
                    transform={"rotate(-90, " + textXPos + ", 0)"}
                    dx={"-.8em"}
                    dy={"-.55em"}>

                    {this.props.data.date}
                </text> */}
            </g>
        )
    }
}

export default LeftChartTickComponent;
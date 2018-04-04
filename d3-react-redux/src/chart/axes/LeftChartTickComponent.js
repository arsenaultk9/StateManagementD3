import React, { Component } from "react";

class LeftChartTickComponent extends Component {
    getText(yPos, text) {
        if (this.props.tick.isBorderTick) {
            return null;
        }

        const textYPos = yPos + 9;
        
        return (
            <text
                className="Chart-text"
                x={-5}
                y={textYPos}
                dx={"-.8em"}
                dy={"-.55em"}>

                {text}
            </text>
        )
    }

    render() {
        const yPos = parseInt(-this.props.height + this.props.y(this.props.tick.value), 10);
        return (
            <g>
                <line
                    className="Chart-line"
                    x1={-5}
                    x2={0}
                    y1={yPos}
                    y2={yPos} />

                {this.getText(yPos, this.props.tick.value)}
            </g>
        )
    }
}

export default LeftChartTickComponent;
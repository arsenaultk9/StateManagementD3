import React, { Component } from "react";

class BottomChartTickComponent extends Component {
    render() {
        const xPos = this.props.x(this.props.data.date);

        return (
            <g>
                <line
                    className="Chart-line"
                    x1={xPos}
                    x2={xPos}
                    y1={0}
                    y2={5} />

                {/* <text 
                    className="Chart-text"
                    x = {xPos}
                    y = {5}
                    transform={"rotate(-90)"}>
                    dx={"-.8em"}
                    {this.props.data.value}
                </text> */}
            </g>
        )
    }
}

export default BottomChartTickComponent;
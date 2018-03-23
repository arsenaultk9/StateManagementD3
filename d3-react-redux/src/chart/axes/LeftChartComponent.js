import React, { Component } from "react";
import LeftChartTickComponent from "./LeftChartTickComponent.js";

class LeftChartComponent extends Component {
    constructor(props) {
        super(props);

        this.highestTick = this.getHighestTick(this.props.shownData)
        this.ticks = this.getTicks(this.highestTick);
    }

    getHighestTick(shownData) {
        const shownValues = shownData.map(sd => sd.value);
        const highestShownData = Math.max.apply(Math, shownValues);

        return Math.ceil(highestShownData / 100) * 100;
    }

    getTicks(highestTick) {
        const ticks = [];
        for (let currentTick = 0; currentTick <= highestTick; currentTick += 100) {
            ticks.push(currentTick);
        }

        return ticks;
    }

    render() {
        const bottomTicks = this.ticks.map(tick => (
            <LeftChartTickComponent tick={tick} highestTick={this.highestTick} y={this.props.y} />
        ));

        return (
            <g>
                <line
                    className="Chart-line"
                    x1={0}
                    x2={0}
                    y1={0}
                    y2={-this.props.chartSettings.height} />

                {bottomTicks}
            </g>
        )
    }
}

export default LeftChartComponent;
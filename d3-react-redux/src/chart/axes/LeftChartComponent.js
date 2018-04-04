import React, { Component } from "react";
import LeftChartTickComponent from "./LeftChartTickComponent.js";

class LeftChartComponent extends Component {
    constructor(props) {
        super(props);

        this.highestValue = this.getHighestValue(this.props.shownData);
        this.highestTick = this.getHighestTick(this.highestValue);
        this.ticks = this.getTicks(this.highestTick, this.highestValue);
    }

    getHighestValue(shownData) {
        const shownValues = shownData.map(sd => sd.value);
        return Math.max.apply(Math, shownValues);
    }

    getHighestTick(highestValue) {
        return Math.ceil(highestValue / 100) * 100;
    }

    getTicks(highestTick, highestValue) {
        const ticks = [];

        for (let currentTick = 0; currentTick <= highestTick; currentTick += 100) {
            const isBorderTick = currentTick === highestTick;
            const valueAjusted = isBorderTick ? highestValue : currentTick;
            ticks.push({ value: valueAjusted, isBorderTick: isBorderTick });
        }

        return ticks;
    }

    render() {
        const bottomTicks = this.ticks.map(tick => (
            <LeftChartTickComponent tick={tick} height={this.props.chartSettings.height} y={this.props.y} />
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
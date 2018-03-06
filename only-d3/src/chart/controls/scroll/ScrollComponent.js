import React, { Component } from "react";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/fontawesome-free-solid";

import ChartBootstrapper from "../../ChartBootstrapper.js";

class ScrollComponent extends Component {
    constructor() {
        super();

        this.scrollController = ChartBootstrapper.getInstance().scrollController;
    }

    render() {
        return (
            <div className="Scroll">
                <div id="scrollLeft" onClick={(e) => this.scrollController.scrollLeft()} style={{ display: "inline" }} className={"Chart-button"}>
                    <FontAwesomeIcon icon={faChevronCircleLeft} size="2x" />
                </div>

                <div id="scrollRight" onClick={(e) => this.scrollController.scrollRight()} style={{ display: "inline" }} className={"Chart-button"}>
                    <FontAwesomeIcon icon={faChevronCircleRight} size="2x" />
                </div>
            </div>
        );
    }
}

export default ScrollComponent;
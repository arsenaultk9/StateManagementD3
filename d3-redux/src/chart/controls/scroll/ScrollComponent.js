import React, { Component } from "react";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/fontawesome-free-solid";

import store from "../../../Store.js";
import * as ChartDataActions from "../../../actions/ChartDataActions.js";

class ScrollComponent extends Component {
    constructor() {
        super();

        this.dispatchScrollLeft = () => store.dispatch(ChartDataActions.moveLeft());
        this.dispatchScrollRight = () => store.dispatch(ChartDataActions.moveRight());
    }

    render() {
        return (
            <div className="Scroll">
                <div id="scrollLeft" onClick={(e) => this.dispatchScrollLeft()} style={{ display: "inline" }} className={"Chart-button"}>
                    <FontAwesomeIcon icon={faChevronCircleLeft} size="2x" />
                </div>

                <div id="scrollRight" onClick={(e) => this.dispatchScrollRight()} style={{ display: "inline" }} className={"Chart-button"}>
                    <FontAwesomeIcon icon={faChevronCircleRight} size="2x" />
                </div>
            </div>
        );
    }
}

export default ScrollComponent;
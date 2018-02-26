import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/fontawesome-free-solid';

import ScrollController from "./ScrollController";

class ScrollComponent extends Component {
    constructor() {
        super();

        this.scrollController = new ScrollController();
    }

    render() {
        return (
            <div className="Scroll">
                <div id="scrollLeft" onClick={(e) => this.scrollController.scrollLeft()} style={{ display: "inline" }}>
                    <FontAwesomeIcon icon={faChevronCircleLeft} size="2x" />
                </div>

                <div id="scrollRight" onClick={(e) => this.scrollController.scrollRight()} style={{ display: "inline" }}>
                    <FontAwesomeIcon icon={faChevronCircleRight} size="2x" />
                </div>
            </div>
        );
    }
}

export default ScrollComponent;
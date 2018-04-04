import React, { Component } from "react";
import { connect } from "react-redux";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/fontawesome-free-solid";

import * as ChartDataActions from "../../../actions/ChartDataActions.js";

class ScrollComponent extends Component {
    render() {
        return (
            <div className="Scroll">
                <div id="scrollLeft" onClick={(e) => this.props.scrollLeft() } style={{ display: "inline" }} className={"Chart-button"}>
                    <FontAwesomeIcon icon={faChevronCircleLeft} size="2x" />
                </div>

                <div id="scrollRight" onClick={(e) => this.props.scrollRight() } style={{ display: "inline" }} className={"Chart-button"}>
                    <FontAwesomeIcon icon={faChevronCircleRight} size="2x" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = storeState => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        scrollLeft: () => dispatch(ChartDataActions.moveLeft()),
        scrollRight: () => dispatch(ChartDataActions.moveRight())
    }
}

const ScrollContainer = connect(mapStateToProps, mapDispatchToProps)(ScrollComponent);
export default ScrollContainer;
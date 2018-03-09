import amplify from "amplifier";

import ActionTypes from "../../../domain/ActionTypes.js";
import ScrollViewModel from "./ScrollViewModel.js";

class ScrollController {
    constructor(lowerBound, upperBound) {
        this.scrollViewModel = new ScrollViewModel(lowerBound, upperBound);
    }

    scrollLeft() {
        this.scrollViewModel.scrollLeft();
        amplify.publish(ActionTypes.MOVE_VIEW_POSITION, this.scrollViewModel);
    }

    scrollRight() {
        this.scrollViewModel.scrollRight();
        amplify.publish(ActionTypes.MOVE_VIEW_POSITION, this.scrollViewModel);
    }
}

export default ScrollController;
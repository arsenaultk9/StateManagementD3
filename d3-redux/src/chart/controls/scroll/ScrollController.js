import amplify from "amplifier";

import Topics from "../../../domain/Topics.js";
import ScrollViewModel from "./ScrollViewModel.js";

class ScrollController {
    constructor(lowerBound, upperBound) {
        this.scrollViewModel = new ScrollViewModel(lowerBound, upperBound);
    }

    scrollLeft() {
        this.scrollViewModel.scrollLeft();
        amplify.publish(Topics.MOVE_VIEW_POSITION, this.scrollViewModel);
    }

    scrollRight() {
        this.scrollViewModel.scrollRight();
        amplify.publish(Topics.MOVE_VIEW_POSITION, this.scrollViewModel);
    }
}

export default ScrollController;
import amplify from "amplifier";

import Topics from "../../../domain/Topics";
import ScrollViewModel from "./ScrollViewModel";

class ScrollController {
    constructor(chartData) {
        this.scrollViewModel = new ScrollViewModel(0, chartData.length);
    }

    scrollRight() {
        amplify.publish(Topics.SCROLL_RIGHT);
    }

    scrollLeft() {
        amplify.publish(Topics.SCROLL_LEFT);
    }
}

export default ScrollController;
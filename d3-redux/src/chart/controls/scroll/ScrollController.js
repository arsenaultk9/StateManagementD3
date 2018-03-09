import store from "../../../Store.js";
import * as ChartDataActions from "../../../actions/ChartDataActions.js";

class ScrollController {
    scrollLeft() {
        store.dispatch(ChartDataActions.moveLeft());
    }

    scrollRight() {
        store.dispatch(ChartDataActions.moveRight());
    }
}

export default ScrollController;
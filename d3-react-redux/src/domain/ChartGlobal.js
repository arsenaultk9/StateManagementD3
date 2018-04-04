import * as WindowHelper from "../utilities/WindowHelper";

class ChartGlobal {
    constructor() {
        this.margin = {top: 20, right: 60, bottom: 70, left: 60};
        this.width = WindowHelper.getBrowserWidth() - this.margin.left - this.margin.right;
        this.height = 300 - this.margin.top - this.margin.bottom;
    }
}

export default ChartGlobal;
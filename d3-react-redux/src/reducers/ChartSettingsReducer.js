import * as WindowHelper from "../utilities/WindowHelper";

const margin = {top: 20, right: 60, bottom: 70, left: 60};
const initialState = {
    margin: margin,
    width: WindowHelper.getBrowserWidth() - margin.left - margin.right,
    height: 300 - margin.top - margin.bottom
}

const chartSettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default chartSettingsReducer;
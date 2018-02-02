import * as d3 from "d3";

// Parse the date / time
function parseDate(date) { 
    return d3.timeFormat(date, "%Y-%m")() 
}

export {parseDate}
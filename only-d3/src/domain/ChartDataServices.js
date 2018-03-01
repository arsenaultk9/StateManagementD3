function getChartData() {
    const chartData = [];

    for (let index = 0; index < 200; index++) {
        const chartItem = { date: 1994 + index, value: parseInt(Math.random() * 1000, 10) };
        chartData.push(chartItem)
    }

    return chartData;
}

export { getChartData }
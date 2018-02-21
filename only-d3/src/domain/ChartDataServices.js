function getChartData() {
    const chartData = [];

    for (let index = 0; index < 50; index++) {
        const chartItem = { date: 1995 + index, value: parseInt(Math.random() * 1000, 10) };
        chartData.push(chartItem)
    }

    return chartData;
}

export { getChartData }
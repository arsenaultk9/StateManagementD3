class ScrollViewModel {
    constructor(lowerBound, upperBound) {
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
    }

    scrollLeft() {
        this.lowerBound -= 1;
        this.upperBound -= 1;
    }

    scrollRight() {
        this.lowerBound += 1;
        this.upperBound += 1;
    }
}

export default ScrollViewModel;
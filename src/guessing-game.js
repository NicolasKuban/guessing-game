class GuessingGame {
    constructor() {
        this.leftBorder = 0
        this.rightBorder = 1000
        this.testNumber = 0
    }

    setRange(min, max) {
        this.leftBorder = Number(min)
        this.rightBorder = Number(max)
    }

    guess() {
        this.testNumber = (Math.round((this.rightBorder + this.leftBorder) / 2))
        return this.testNumber
    }

    lower() {
        this.rightBorder = this.testNumber
    }

    greater() {
        this.leftBorder = this.testNumber
    }
}

module.exports = GuessingGame;

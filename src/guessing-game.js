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
        // console.log(this.rightBorder, '===', this.leftBorder)
        // console.log(this.rightBorder - this.leftBorder)
        // console.log(Math.floor((this.rightBorder - this.leftBorder) / 2))
        // console.log(Math.floor((this.rightBorder - this.leftBorder) / 2) + this.leftBorder)
        this.testNumber = (Math.round((this.rightBorder + this.leftBorder) / 2))
        return this.testNumber
    }

    lower() {
        this.rightBorder = this.guess() // - 1
    }

    greater() {
        this.leftBorder = this.guess() // + 1
    }
}

module.exports = GuessingGame;


const number = 279;
const game = new GuessingGame();
game.setRange(0, 3445)

let result = game.guess();
console.log(game)
game.lower();
result = game.guess();
console.log(game)
game.lower();
result = game.guess();
console.log(game)
game.lower();
result = game.guess();
console.log(game)
game.greater();
result = game.guess();
console.log(game)
game.lower();
result = game.guess();
console.log(game)
game.greater();
result = game.guess();
console.log(game)
game.lower();
result = game.guess();
console.log(game)
game.lower();
result = game.guess();
console.log(game)
game.greater();
result = game.guess();
console.log(game)
game.lower();
result = game.guess();
console.log(game)




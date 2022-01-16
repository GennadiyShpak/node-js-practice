class Calculator {
    mult = (operation, arr) => {
        if (operation === "mult") {
            return arr.reduce((acc, item) => acc * item)
        }
    }

    div = (operation, arr) => {
        if (operation === "div") {
            return arr.reduce((acc, item) => acc / item)
        }
    }

    sub = (operation, arr) => {
        if (operation === "sub") {
            return arr.reduce((acc, item) => acc - item)
        }
    }

    sum = (operation, arr) => {
        if (operation === "sum") {
            return arr.reduce((acc, item) => acc + item)
        }
    }
}

module.exports = new Calculator();
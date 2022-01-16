const mult = (operation, arr) => {
    if (operation === "mult") {
        return arr.reduce((acc, item) => acc * item)
    }
}

module.exports = mult;
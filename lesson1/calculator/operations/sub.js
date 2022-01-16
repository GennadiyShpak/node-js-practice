const sub = (operation, arr) => {
    if (operation === "sub") {
        return arr.reduce((acc, item) => acc - item)
    }
}

module.exports = sub;
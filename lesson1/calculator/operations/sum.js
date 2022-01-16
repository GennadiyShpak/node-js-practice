const sum = (operation, arr) => {
    if (operation === "sum") {
        return arr.reduce((acc, item) => acc + item)
    }
}

module.exports = sum;
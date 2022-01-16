const div = (operation, arr) => {
    if (operation === "div") {
        return arr.reduce((acc, item) => acc / item)
    }
}

module.exports = div;
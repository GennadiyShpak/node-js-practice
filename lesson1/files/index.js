const path = require('path');
const fs = require("fs/promises");

// const config = path.join(__dirname, "../DB/db.json")
// const config = path.resolve(__dirname, "one", "two", "three")
(async () => {
    const dbPath = path.join(__dirname, "..", "DB", "db.json")

    const data = await fs.readFile(dbPath, {encoding: "utf-8"})
    console.log(data)
})()

// path.join()
// path.resolve()

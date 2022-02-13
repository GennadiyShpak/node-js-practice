const Book = require('../../models/Books');
const { HTTP_RESPONSES } = require("../../lib");
const asyncHandler = require("../../middlevares/async")

const getAll = asyncHandler(async (req, res) => {
    const {code, status} = HTTP_RESPONSES.ok;
    const booksList = await Book.find({})
    return res.status(code).json({data: booksList, status, length: booksList.length})
})

module.exports = getAll;
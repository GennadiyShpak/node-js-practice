const Book = require('../../models/Books');
const { HTTP_RESPONSES } = require("../../lib")

const create = async (req, res) => {
    const {code, status} = HTTP_RESPONSES.created;
    const newBook = await Book.create(req.body)
    return res.status(code).json({data: newBook, status})
}

module.exports = create;
const Book = require('../../models/Books');
const { HTTP_RESPONSES } = require("../../lib")

const getOne = async (req, res) => {
    const {code, status} = HTTP_RESPONSES.ok;
    const {id} = req.params;
    const book = await Book.findById(id)
    return res.status(code).json({data: book, status})
}

module.exports = getOne;
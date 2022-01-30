const Book = require('../../models/Books');
const { HTTP_RESPONSES } = require("../../lib")

const remove = async (req, res) => {
    const {code, status} = HTTP_RESPONSES.ok;
    const {id} = req.params;
    const updatedBook = await Book.findByIdAndRemove(id)
    return res.status(code).json({data: updatedBook, status})
}

module.exports = remove;
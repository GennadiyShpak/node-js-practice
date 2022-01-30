const Book = require('../../models/Books');
const { HTTP_RESPONSES } = require("../../lib")

const update = async (req, res) => {
    const {code, status} = HTTP_RESPONSES.ok;
    const {id} = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
    })
    return res.status(code).json({data: updatedBook, status})
}

module.exports = update;
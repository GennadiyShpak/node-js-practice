const {model, Schema} = require('mongoose');

const { NUMBERS } = require('../lib')

const bookSchema = Schema({
    "author": {
        type: String, 
        unique: false, 
        required: [true, "Add author!!!"],
        trim: true,
        minLengths: [NUMBERS.minFieldLength, "To short author name! Min 2 symbols"],
        maxLength: [NUMBERS.maxFieldLength, "To long name, no more 20 charaster"],
    },
    "language": {
        type: String,
        enum: ['en', 'ua', 'ne'],
        default: 'en'
    },
    "pages": { type: Number},
    "title": {
        type: String, 
        unique: false, 
        required: [true, "Add title!!!"],
        trim: true,
        minLengths: [NUMBERS.minFieldLength, "To short title! Min 2 symbols"],
        maxLength: [NUMBERS.maxFieldLength, "To long title, no more 20 charaster"],
    },
    "year": {type: Number}
  }, {versionKey: false, timestamps: true}
)

module.exports = model('book', bookSchema)
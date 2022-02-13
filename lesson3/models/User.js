const {Schema, model} = require('mongoose');

const { NUMBERS } = require('../lib');

const userSchema = Schema({
    name: {
        type: String,
        default: 'John Doe',
        trim: true,
        minLengths: [NUMBERS.minFieldLength, "To short user name! Min 2 symbols"],
        maxLength: [NUMBERS.maxFieldLength, "To long name, no more 20 charaster"],
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minLengths: [NUMBERS.minFieldLength, "To short user name! Min 2 symbols"],
        maxLength: [NUMBERS.maxFieldLength, "To long name, no more 20 charaster"],
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLengths: [NUMBERS.minFieldLength, "To short passwod! Min 2 symbols"],
        maxLength: [NUMBERS.maxFieldLength, "To long password, no more 20 charaster"],
    },
    token: {
        type: String,
    },
    status: {
        type: String
    },
    role: {
        type: Array,
        default: 'USER'
    }
}, {versionKey: false, timestamps: true})

module.exports = model('user', userSchema)
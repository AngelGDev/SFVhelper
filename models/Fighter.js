const mongoose = require('mongoose')

const FighterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    antiairs: {
        type: String,
        required: true,
    },
    pokes: {
        type: String,
        required: true,
    },
    bnbLight: {
        type: String,
        required: true,
    },
    bnb: {
        type: String,
        required: true,
    },
    crushCounterEZ: {
        type: String,
        required: true,
    },
    dpPunish: {
        type: String,
        required: true,
    },
    tickThrowButtons: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    cloudinaryId: {
        type: String,
        require: true,
    },
})

module.exports = mongoose.model('Fighter', FighterSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactClassification = new Schema({
    classification:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Number(Date.now())
    }
})

const Classification = mongoose.model('Classification',contactClassification)
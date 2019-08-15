const mongoose = require('mongoose')
const Schema = mongoose.Schema

const classificationSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt:{
        type: Date,
        default: Number(Date.now())
    },
})

const Classification = mongoose.model('Classification',classificationSchema)

module.exports = Classification
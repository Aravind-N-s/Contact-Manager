const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
    name:{
        type:String,
        required:true,
        minlength:2,
        maxlength:16
    },
    email:{
        type:String,
    },
    number:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10
    },
    classification:{
        type: Schema.Types.ObjectId,
        ref:'Classification',
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
    }
})

const Contact = mongoose.model('Contact',contactSchema)

module.exports = Contact
const Contact = require('../Model/Contact')
const Classification = require('../Model/Classification')

module.exports.list = (req,res) =>{
    const {user} = req
    Promise.all([Contact.find({
        user:user._id
    }).populate('classification').sort({createdAt: -1}),
    Classification.find({
        user: user._id
    })])
    .then((response) => {
        res.json({
            contact: response[0],
            classification: response[1]
        })
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.create = (req,res) =>{
    const {user} = req
    const body = req.body
    const contact = new Contact(body)
    contact.user = user._id
    contact.save()
    .then((contacts) => {
        res.json(contacts)
    })
    .catch((err) => {
        res.json(err)
    })

}

module.exports.show = (req,res) =>{
    const id = req.params.id
    Contact.findOne({
        user:req.user._id,
        _id: id
    }).populate('classification')
    .then((contact) => {
        if(!contact){
            res.json({})
        }
        res.json(contact)
    })
    .catch((err) => {
        res.json(err)
    })

}

module.exports.update = (req,res) =>{
    const id = req.params.id
    const body = req.body
    Contact.findOneAndUpdate({
        user: req.user._id,
        _id: id
    }, { $set: body }, {new: true, runValidators: true})
    .then((contact) => {
        if(!contact){
            res.json({})
        }
        res.json(contact)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.destroy = (req,res) =>{
    const id = req.params.id
    Contact.findOneAndDelete({
        user: req.user._id,
        _id:id})
    .then((contact) => {
        res.json(contact)
    })
    .catch((err) => {
        res.json(err)
    })    
}
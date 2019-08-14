const Classification = require('../Models/Classification')

module.exports.list = (req,res) =>{
    const {user} = req
    Classification.find({
        user:user._id
    })
    .then((classifications) => {
        res.json(classifications)
    })
    .catch((err) => {                     
        res.json(err)
    })
}

module.exports.create = (req,res) =>{
    const {user} = req
    const body = req.body
    const classification = new Classification(body)
    classification.user = user._id
    classification.save()
    .then((classifications) => {
        res.json(classifications)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.show = (req,res) =>{
    const id = req.params.id
    Category.findOne({
        user:req.user._id,
        _id: id
    })
    .then(classifications => {
        res.json({classifications}) 
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.update = (req,res) =>{
    const id = req.params.id
    const body = req.body
    Classification.findOneAndUpdate({
        user: req.user._id,
        _id: id
    }, { $set: body }, {new: true, runValidators: true})
    .then((classifications) => {
        if(!classifications){
            res.json({})
        }
        res.json(classifications)
    })
    .catch((err) => {
        res.json(err)
    })

}

module.exports.destroy = (req,res) =>{
    const id = req.params.id
    Classification.findOneAndDelete({
        user: req.user._id,
        _id:id
    })
    .then((contacts) => {
        res.json(classifications)
    })
    .catch((err) => {
        res.json(err)
    })
}
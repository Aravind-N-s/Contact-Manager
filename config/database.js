const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.set('useFindAndModify', false)

//connect to db
mongoose.connect('mongodb://localhost:27017/authentication', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to the DB')
    })
    .catch((err) => {
        console.log('ERROR connected to DB')
    })

module.exports = {
    mongoose
}

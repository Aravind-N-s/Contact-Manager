const express = require('express')
const {mongoose} = require('./config/database')
const {usersRouter} = require('./app/controller/usersController')
const cors = require('cors')
const app = express()
const port = 3005

app.use(cors())
app.use(express.json())
app.use('/users',usersRouter)

app.listen(port, function(){
    console.log('Listening On Port', port)
})
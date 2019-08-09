const express = require('express')
const router = require('./config/routes')
const {mongoose} = require('./config/database')
const {usersRouter} = require('./app/Controllers/usersController')
const cors = require('cors')
const app = express()
const port = 3005

app.use(cors())
app.use(express.json())
app.use('/', router)
app.use('/users',usersRouter)

app.listen(port, function(){
    console.log('Listening On Port', port)
})
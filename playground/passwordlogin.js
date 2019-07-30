const bcryptjs = require('bcryptjs')

const encrypted = ''
const password = 'secret123'

bcryptjs.compare(password, encrypted)
    .then(result =>{
        console.log(result)
    })
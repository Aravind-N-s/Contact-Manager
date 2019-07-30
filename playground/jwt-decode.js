const jwt = require('jsonwebtoken')

const token = '123'
//correct token would give the sent data back

console.log(jwt.verify(token,('jwt@123')))
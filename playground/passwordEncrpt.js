const bcryptjs = require('bcryptjs')
const password = 'secret123' 

bcryptjs.genSalt(10)
    .then(salt => {
        console.log(salt)
        bcryptjs.hash(password,salt)
            .then(encrptedPassword => {
                console.log(encrptedPassword)
            })

    })
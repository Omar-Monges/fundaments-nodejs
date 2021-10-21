const bcrypt = require('bcrypt')

const password = ' Bravo Dexter 123 Zulu '

bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash)


    bcrypt.compare(password, hash, (err, res) => {
        console.log(res)
    })
})
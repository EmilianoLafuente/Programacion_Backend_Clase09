require('dotenv').config()

const config = {
    port: process.env.port || 3000, 
    db: {
        userDb: process.env.USER || 'admin' ,
        passDb: process.env.PASS || 'admin'
    }
}

module.exports = config
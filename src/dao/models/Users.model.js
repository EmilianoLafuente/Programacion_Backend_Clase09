const mongoose = require('mongoose')

const userCollection = 'user'

const userSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    isActive: {
        type: Boolean,
        default: true
    } //con esto seteamos que si esta activo o no, por default si
})

const User = mongoose.model(userCollection,userSchema)

module.exports = User
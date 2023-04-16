const mongoose = require('mongoose')

const userCollection = 'user'

const userSchema = new mongoose.Schema({
    name: String,
    lastname: String
})

const User = mongoose.model(userCollection,userSchema)

module.exports = User
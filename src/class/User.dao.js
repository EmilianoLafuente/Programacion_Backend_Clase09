const User = require("../models/Users.model");

class UserDao {
    async find() {
        try {
            const user = await User.find()
            return user
        } catch (error) {
            return error
        }
    }

    async create(newUser) {
        try {
            const response = User.create(newUser)
            return response
        } catch (error) {
            return error
        }
    }

    async delete() {
        try {
            await User.deleteMany()
            return 'Usuarios eliminados'
            //res.json({message: 'Todos los usuarios fueron eliminados'})

        } catch (error) {
            return error
        }
    } 
}

module.exports = UserDao
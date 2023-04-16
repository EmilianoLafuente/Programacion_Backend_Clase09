const {Router} = require('express')
const User = require('../models/Users.model')

const router = Router()


router.get('/', async (req, res) => {

    try {
        const users = await User.find()
        res.json({message: (users)})        
    } catch (error) {
        res.status(400).json({error})
    }    
})


router.post('/', async (req, res) => {
    try {
        const {name, lastname} = req.body

        const newUser = {
            name,
            lastname
        }

        const response = await User.create(newUser)
        res.json(response)
        
        console.log(response.toString());
    } 
    catch (error) {
        res.status(400).json({error})
    }
})

module.exports = router
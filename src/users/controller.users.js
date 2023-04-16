const {Router} = require('express')
const User = require('../models/Users.model')

const router = Router()


router.get('/', async (req, res) => {

    try {
        const response = await User.find()
        //Mapeo la respuesta
        const users = response.map(({name,lastname}) => ({
                name,
                lastname
        }))

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

router.delete('/', async (req, res) => {
    await User.deleteMany()
    res.json({message: 'Todos los usuarios fueron eliminados'})
})

module.exports = router
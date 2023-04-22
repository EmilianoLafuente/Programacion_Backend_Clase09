const {Router} = require('express')
const UserDao = require('../class/User.dao.js')
const User = new UserDao()

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
        //console.log(response.toString());
    } 
    catch (error) {
        res.status(400).json({error})
    }
})

router.delete('/', async (req, res) => {
    response = await User.delete()
    res.json({response})
    })

module.exports = router
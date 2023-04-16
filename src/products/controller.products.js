const {Router} = require('express')
const Product = require('../models/Products.model')

const router = Router()

router.get('/', async (req, res) => {

    try {
        const prodcuts = await Product.find()
        res.json({message: 'Hola products con get'})
    } catch (error) {
        res.status(400).json({error})
    }

})


router.post('/', async (req, res) => {
    try {
        
    } catch (error) {
        
    }

    res.json({message: 'Hola products con post'})
})

module.exports = router
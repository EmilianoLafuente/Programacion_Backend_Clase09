const {Router} = require('express')
const Product = require('../dao/models/Products.model')
const FilesManager = require('../dao/files.dao')
const productsManager = new FilesManager('Products.json')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const prodcuts = await Product.find()
        res.json({message: prodcuts })
    } catch (error) {
        res.status(400).json({error})
    }

})


router.post('/', async (req, res) => {
    try {
        const products = await productsManager.loadItems()      
        await Product.insertMany(products)
        res.json('Productos cargados')
    } catch (error) {
        res.json({error})
    }
})

router.delete('/', async (req, res) => {
    await Product.deleteMany()
    res.json({message: 'Todos los productos fueron eliminados'})
})

module.exports = router
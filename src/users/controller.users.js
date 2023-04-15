const {Router} = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.json({message: 'Hola usuarios con get'})
})


router.post('/', (req, res) => {
    res.json({message: 'Hola usuarios con post'})
})

module.exports = router
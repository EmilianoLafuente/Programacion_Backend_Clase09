const {Router} = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.json({message: 'Hola products con get'})
})


router.post('/', (req, res) => {
    res.json({message: 'Hola products con post'})
})

module.exports = router
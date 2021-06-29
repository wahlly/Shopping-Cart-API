const { selectedItems } = require('../controllers/userController')

const router = require('express').Router()

router.post('/cart/:id', (req, res) => selectedItems(req, res))

module.exports = router
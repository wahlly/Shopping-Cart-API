const { registerUser } = require('../controllers/userController')
const router = require('express').Router()

//create user
router.post('/register', (req, res) => registerUser(req, res))

module.exports = router
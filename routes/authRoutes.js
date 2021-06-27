const { registerUser } = require('../controllers/userController')
const { AuthenticateUser } = require('./auth/passport-jwt')
const router = require('express').Router()

//create user
router.post('/register', (req, res) => registerUser(req, res))

router.post('/login', (req, res) => AuthenticateUser(req, res))

module.exports = router
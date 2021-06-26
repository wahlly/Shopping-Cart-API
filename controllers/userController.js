const { userRegistration } = require('../services/userService')

module.exports = class UserController{
    static async registerUser(req, res) {
        try{
        const user = await userRegistration(req.body)
        if(!user) {
            return res.status(400).json({ err: 'Bad request, try again' })
        }
        return res.status(200).json(user)
        }
        catch(err) {
            res.status(500).json('Server error, please try again')
        }
    }
}
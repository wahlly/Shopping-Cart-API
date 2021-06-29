const { userRegistration, itemSelections } = require('../services/userService')
module.exports = class UserController{
    static async registerUser(req, res) {
        try{
        const user = await userRegistration(req.body)
        if(!user) {
            return res.status(400).json({ err: 'Bad request, try again' })
        }
        user.password = undefined
        return res.status(200).json(user)
        }
        catch(err) {
            res.status(500).json('Server error, please try again')
        }
    }

    static async selectedItems(req, res) {
        try {
            const item = await itemSelections(req.params.id, req.body)
            if(!item) {
                return res.status(400).json({ err: 'Bad request, try again' })
            }
            item.userId = undefined
            return res.status(200).json(item)
        } 
        catch(err) {
            res.status(500).json(err.message)
        }
    }
}
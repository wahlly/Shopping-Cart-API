const { Users, cartItems } = require('../models/index')
const bcrypt = require('bcrypt')
module.exports = class UserService{
    static async userRegistration(profile) {
        try {
            let user = await Users.build({
                name: profile.name,
                email: profile.email,
                password: profile.password
            })
            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(profile.password, salt)
            return await user.save()
        }
        catch(err) {
            console.error(err.message)
        }
    }

    static async userAuthentication(email) {
        try {
            return await Users.findOne({ where: {email: email} })
        }
        catch(err) {
            console.error(err)
        }
    }

    static async itemSelections(userId, details) {
        try {
            return await cartItems.create({
                product: details.product,
                qty: details.qty,
                price: details.price,
                amount: details.qty * details.price,
                userId: userId
            })
        }
        catch(err) {
            console.error(err)
        }
    }
}
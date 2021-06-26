const { Users } = require('../models/index')
const bcrypt = require('bcrypt')

module.exports = class UserService{
    static async userRegistration(profile) {
        try {
            let user = await Users.build({
                firstName: profile.firstName,
                lastName: profile.lastName,
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
}
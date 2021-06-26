const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Users extends Model{}
        Users.init({
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        },
        {
        sequelize,
        modelName: 'Users'
        })
    return Users
}
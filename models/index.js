const Sequelize = require('sequelize')
const configs = require('../configs/config.json')
const Users = require('./user')

const sequelize = new Sequelize(configs.mysql.options)

sequelize.authenticate()
    .then(() => {
        console.log('database connected successfully')
    })
    .catch((err) => {
        console.error('unable to connect to db', err)
    })

    const db = {}
    db['Users'] = Users(sequelize, Sequelize.DataTypes)

module.exports = db
const authRoute = require('./authRoutes')

module.exports = (app) => {
    app.use('/auth', authRoute)
}
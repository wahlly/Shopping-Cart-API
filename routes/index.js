const authRoute = require('./authRoutes')
const serviceRoute = require('./serviceRoute')

module.exports = (app) => {
    app.use('/auth', authRoute)

    app.use('/api/v1', serviceRoute)
}
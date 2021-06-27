const app = require('express')()
const port = process.env.port || 5570
require('./models/index')
const middleware = require('./middlewares/middleware')
const routes = require('./routes/index')
const passport = require('passport')

app.use(passport.initialize())
middleware(app)
routes(app)

app.listen(port, () => {
    console.log(`server is listening on port:${port}`)
})
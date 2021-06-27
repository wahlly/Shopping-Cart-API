const passport = require('passport')
const { userAuthentication } = require('../../services/userService')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'shoppingCart';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log('payload received', jwt_payload)
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

module.exports = {
   AuthenticateUser: async (req, res) => {
    try {
        const user = await userAuthentication(req.body.email)
        if(!user) {
            return res.status(404).json('User not found')
        }
        let confirmUser = await bcrypt.compare(req.body.password, user.password)
        if(!confirmUser) {
            return res.status(401).json('Wrong password, try again!')
        }

        let payload = { user: user.id }
        let token = jwt.sign(payload, opts.secretOrKey)
        return res.status(200).json({ token: token })
    }
    catch(err) {
        console.error(err)
        res.status(500).json('Server error')
    }
}
}
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const jwt = require('jsonwebtoken');

const user = { id: 1, username: 'user1', password: 'password123', role: 'admin' };

passport.use(new LocalStrategy((username, password, done) => {
    if (username === user.username && password === user.password) {
        return done(null, user);
    }
    return done(null, false);
}));

passport.use(new JwtStrategy({
    jwtFromRequest: (req) => req.headers.authorization?.split(' ')[1],
    secretOrKey: 'secretKey'
}, (jwtPayload, done) => {
    if (jwtPayload.username === user.username) {
        return done(null, user);
    }
    return done(null, false);
}));

const authType = process.argv[2]; 
const username = process.argv[3];
const password = process.argv[4];

if (authType === 'local') {
    passport.authenticate('local', (err, user) => {
        if (err || !user) {
            console.log('LOGIN FAILED');
        } else {
            // console.log('LOGIN SUCCESS');
        }
    })({ body: { username, password } });  

} else if (authType === 'jwt') {
    
    const token = jwt.sign({ username: user.username, role: user.role }, 'secretKey');

    passport.authenticate('jwt', (err, user) => {
        if (err || !user) {
            console.log('LOGIN FAILED');
        } else {
            //console.log('LOGIN SUCCESS');
        }
    })({ headers: { authorization: `Bearer ${token}` } });  

} else {
    console.log('Invalid authentication method');
}

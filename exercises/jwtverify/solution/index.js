const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const jwt = require('jsonwebtoken');

// Secret key for signing JWT (you should replace this with your actual secret)
const secretKey = 'your-secret-key';

// Passport strategy for JWT verification
passport.use(new Strategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey
}, (jwtPayload, done) => {
  // Assuming user ID is in the JWT payload
  const user = { id: jwtPayload.sub };  // You can add your user retrieval logic here
  return done(null, user);
}));

// Simulate an incoming request with a JWT token
const token = jwt.sign({ sub: 'user1' }, secretKey);  // Simulated JWT

passport.authenticate('jwt', (err, user) => {
  if (err || !user) {
    console.log('LOGIN FAILED');
  } else {
    //console.log('LOGIN SUCCESS');
  }
})({ headers: { authorization: `Bearer ${token}` } });

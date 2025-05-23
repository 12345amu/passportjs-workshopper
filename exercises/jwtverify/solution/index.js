const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key';

passport.use(new Strategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey
}, (jwtPayload, done) => {
 
  const user = { id: jwtPayload.sub }; 
  return done(null, user);
}));

const token = jwt.sign({ sub: 'user1' }, secretKey);  

passport.authenticate('jwt', (err, user) => {
  if (err || !user) {
    console.log('LOGIN FAILED');
  } else {
    //console.log('LOGIN SUCCESS');
  }
})({ headers: { authorization: `Bearer ${token}` } });

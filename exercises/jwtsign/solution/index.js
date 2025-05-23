const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');

const username = process.argv[2];
const password = process.argv[3];

const user = {
  id: 1,
  username: 'user1',
  password: 'password123',
  role: 'user'
};

passport.use(new LocalStrategy((userInput, passInput, done) => {
  if (userInput === user.username && passInput === user.password) {
    return done(null, user);
  } else {
    return done(null, false);
  }
}));

passport.authenticate('local', (err, user) => {
  if (err || !user) {
    console.log('LOGIN FAILED');
  } else {
    const token = jwt.sign(
      { username: user.username, role: user.role },
      'your-secret-key', 
      { expiresIn: '1h' } 
    );
    //console.log('LOGIN SUCCESS');
    //console.log(token);
  }
})({ body: { username, password } });
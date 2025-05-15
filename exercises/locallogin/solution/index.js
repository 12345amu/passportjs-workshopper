const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const user = {
  id: 1,
  username: 'user1',
  password: 'password123'
};

const username = process.argv[2];
const password = process.argv[3];

passport.use(
  new LocalStrategy((inputUsername, inputPassword, done) => {
    if (inputUsername === user.username && inputPassword === user.password) {
      return done(null, user); 
    } else {
      return done(null, false); 
    }
  })
);

const req = {
  body: {
    username,
    password
  }
};

passport.authenticate('local', (err, user, info) => {
  if (err) {
    console.error('Authentication error:', err);
    process.exit(1);
  }

  if (!user) {
    console.log('LOGIN FAILED');
  } else {
    //console.log(`SESSION ACTIVE FOR ${user.username}`);
  }
})(req); 

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const username = process.argv[2];
const password = process.argv[3];

passport.use(new LocalStrategy((username, password, done) => {
  if (username === 'user' && password === 'password123') {
    return done(null, { username: username });
  } else {
    return done(null, false);  
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.username);  
});

passport.deserializeUser((username, done) => {
  done(null, { username });  
});

passport.authenticate('local', (err, user, info) => {
  if (err) {
    return;
  }

  if (!user) {
    return;
  }

  passport.serializeUser(user, (err, sessionUser) => {
    if (err) return;

    passport.deserializeUser(sessionUser, (err, fullUser) => {
      if (err) return;
      //console.log(`SESSION ACTIVE FOR ${fullUser.username}`);
    });
  });
})({ body: { username, password } });

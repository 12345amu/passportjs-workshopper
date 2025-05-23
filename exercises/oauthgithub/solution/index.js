const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/github/callback"
},
(accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

passport.authenticate('github', (err, user) => {
  if (err || !user) {
    console.log('LOGIN FAILED');
  } else {
    console.log('LOGIN SUCCESS');
  }
})({});

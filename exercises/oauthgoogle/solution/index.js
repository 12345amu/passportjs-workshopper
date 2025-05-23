const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const mockProfile = {
  id: '123456789',
  displayName: 'Mock User',
  emails: [{ value: 'mockuser@example.com' }]
};

passport.use(new GoogleStrategy({
  clientID: 'DUMMY_ID',
  clientSecret: 'DUMMY_SECRET',
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
 
  return done(null, profile);
}));

const strategy = passport._strategy('google');
strategy.success = (user) => {
  console.log(`LOGIN SUCCESS: Google user authenticated: ${user.emails[0].value}`);
};
strategy.fail = () => {
  console.log('LOGIN FAILED');
};

strategy.userProfile = function (_, done) {
  done(null, mockProfile);
};

strategy.authenticate({})(null, null); 
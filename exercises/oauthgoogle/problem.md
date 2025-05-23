## Problem: Authenticate with Google OAuth using Passport.js (Simulated in CLI)

In this exercise, you'll simulate Google OAuth authentication using the `passport-google-oauth20` strategy in a CLI environment.

Since OAuth2 flows typically require a browser, we'll simulate the callback phase with a hardcoded Google user profile.

### Requirements

1. Use the `passport-google-oauth20` strategy.
2. Simulate a Google user profile using a hardcoded object.
3. Print `LOGIN SUCCESS: Google user authenticated: mockuser@example.com` on success.

### Hints
- Use the `passport-google-oauth20` strategy to authenticate with Google.
- Use `passport.use()` with a GoogleStrategy and a dummy clientID/secret.
- Directly call the `verify()` function with a mocked profile.
- Use `console.log()` to print the authentication success message.

- Print success message with the user’s email.

### Resources

- (https://www.passportjs.org/packages/passport-google-oauth20/) – Official Passport.js strategy for Google OAuth 2.0 authentication.  [passport-google-oauth20 Strategy]
- (https://github.com/jaredhanson/passport-google-oauth2) – GitHub repository for `passport-google-oauth2` with examples and usage.  [passport-google-oauth2 GitHub Repo]
- (https://developers.google.com/identity/protocols/oauth2) – Google's official OAuth 2.0 documentation explaining the protocol and flow.  [Google OAuth 2.0 Documentation]
- (http://www.passportjs.org/docs/authenticate/) – Guide on `passport.authenticate()` usage including OAuth strategies.  [passport.authenticate()]

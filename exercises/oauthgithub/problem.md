## Problem: Implement OAuth Authentication with GitHub using Passport.js

In this exercise, your goal is to authenticate users using Passport.js with GitHub OAuth strategy. You'll need to configure Passport to authenticate with GitHub and handle the callback after a successful authentication.

### Requirements

1. Set up the Passport GitHub OAuth strategy using `passport-github2`.
2. Implement the callback URL to handle the OAuth redirect and receive user data.
3. Print a success message (`LOGIN SUCCESS`) if the authentication is successful.
4. Print a failure message (`LOGIN FAILED`) if the authentication fails.

Use the following dummy GitHub OAuth credentials (client ID, client secret, etc.) for testing.

### Hints
- Use the `passport-github2` package to set up the GitHub OAuth strategy.
- Use the `passport.authenticate` method to authenticate with GitHub.


### Resources

- (https://www.passportjs.org/packages/passport-github2/) – Official Passport.js strategy for GitHub OAuth authentication.  [passport-github2 Strategy]
- (https://github.com/cfsghost/passport-github) – GitHub repository for `passport-github` and `passport-github2` with examples and setup instructions.  [passport-github2 GitHub Repo]
- (https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps) – GitHub’s official OAuth app authorization documentation.  [GitHub OAuth Documentation]
- (http://www.passportjs.org/docs/authenticate/) – Guide on using `passport.authenticate()` including OAuth flow handling.  [passport.authenticate()]

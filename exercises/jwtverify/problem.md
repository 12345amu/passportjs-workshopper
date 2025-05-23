## Problem: Implement JWT Verification in API Requests

In this exercise, your goal is to implement JWT verification for incoming requests.

### Requirements
- The `verify` function should take in a JWT token and verify its signature.
- A JWT token will be passed in the `Authorization` header.
- You need to verify the JWT token and ensure that the user can only access a protected route if the token is valid.
- On successful verification, return a success message; otherwise, return a failure message.

Use the `jsonwebtoken` library to validate the token and authenticate the user.

### Hints
- Use the `passport-jwt` strategy to extract and verify the JWT.
- Use the `jsonwebtoken` library to verify the token signature.
- Return a success message if the token is valid; otherwise, return a failure message.


### Resources

- (https://www.passportjs.org/packages/passport-jwt/) – Official Passport.js JWT strategy documentation for verifying JWT tokens.  [passport-jwt Strategy]
- (https://github.com/mikenicholson/passport-jwt) – GitHub repository for `passport-jwt` with examples and setup instructions.  [passport-jwt GitHub Repo]
- (https://jwt.io/introduction/) – Introduction to JSON Web Tokens (JWT), explaining token structure and usage.  [JWT Introduction]
- (https://github.com/auth0/node-jsonwebtoken) – Documentation for the `jsonwebtoken` library used to sign and verify JWT tokens.  [jsonwebtoken Library]
- (http://www.passportjs.org/docs/authenticate/) – Guide on using `passport.authenticate()` including usage with custom callbacks.  [passport.authenticate()]

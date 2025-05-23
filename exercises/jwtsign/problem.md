## Problem: Sign a JWT Token

In this exercise, your goal is to implement JWT signing after successful login using the `passport-jwt` strategy.

### Requirements

1. Authenticate the user using hardcoded credentials (like in the local-login exercise).
2. After successful login, generate a JWT token containing the username and a role (e.g., `user`, `admin`).
3. Print `LOGIN SUCCESS` and the JWT token if authentication is successful.
4. Print `LOGIN FAILED` if authentication fails.

### Hints
- Use the `passport-jwt` strategy to authenticate the user.
- Use the `jsonwebtoken` library to generate the JWT token.
- Use the `console.log` function to print the results.

1. The JWT should include the username and role as the payload.

Use the following hardcoded user credentials for authentication:

```js
{
  id: 1,
  username: "user1",
  password: "password123",
  role: "user"
}

### Resources

- (https://www.passportjs.org/concepts/authentication/) – Overview of Passport.js authentication strategies and usage.  [Passport.js Authentication]
- (https://github.com/jaredhanson/passport-local) – GitHub repository and docs for Passport Local Strategy for username/password authentication.  [passport-local Strategy]
- (http://www.passportjs.org/docs/authenticate/) – Guide on how to use `passport.authenticate()` including custom callbacks.  [passport.authenticate()]
- (https://github.com/auth0/node-jsonwebtoken) – GitHub repository and documentation for the `jsonwebtoken` library used to sign and verify JWT tokens.  [jsonwebtoken Library]
- (https://jwt.io/introduction/) – Introduction to JSON Web Tokens (JWT), their structure, usage, and security considerations.  [JWT Introduction]

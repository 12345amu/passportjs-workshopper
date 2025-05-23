## Problem: Implement Multi-Strategy Authentication

In this exercise, you will implement a multi-strategy authentication system using Passport.js. The user will authenticate either via Local or JWT strategy, depending on the CLI flag (`--auth=local` or `--auth=jwt`).

### Requirements:
- Implement **both the Local and JWT strategies** using Passport.
- Implement a mechanism to choose which strategy to use based on a command-line flag.
  - `--auth=local` should trigger the Local strategy.
  - `--auth=jwt` should trigger the JWT strategy.
- If authentication is successful, print `LOGIN SUCCESS`; otherwise, print `LOGIN FAILED`.

### Hints:
- Use `passport.use()` to register both strategies.
- The flow should handle both types of authentication based on the CLI flag or prompt.

- Use `passport.authenticate()` to authenticate the user with the chosen strategy.

- Use `process.argv` to parse the CLI flags.
- Use `console.log()` to print the authentication result.

### Resources

- (https://www.passportjs.org/packages/passport-local/) – Passport Local Strategy for username/password authentication. [passport-local Strategy]
- (https://www.passportjs.org/packages/passport-jwt/) – Passport JWT Strategy for token-based authentication. [passport-jwt Strategy]
- (https://github.com/auth0/node-jsonwebtoken) – JSON Web Token implementation for Node.js, used for signing and verifying tokens. [jsonwebtoken]
- (http://www.passportjs.org/docs/authenticate/) – Guide on using `passport.authenticate()` with callbacks and manual invocation. [passport.authenticate()]
- (https://www.passportjs.org/concepts/authentication/sessions/) – Explanation of Passport.js session management (optional for your use case). [Passport Sessions]

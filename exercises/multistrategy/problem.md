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

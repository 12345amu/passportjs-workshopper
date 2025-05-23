# Exercise: Local Authentication with Passport.js (CLI)
In this exercise, you will implement local authentication using Passport.js for a command-line interface (CLI). You will authenticate a user based on a username and password, You will use command-line arguments instead of a web form or HTTP server.

### Requirements

1. Use `passport-local` for login authentication.
2. The program will authenticate a user based on a hardcoded username and password.
3. The username and password will be passed as command-line arguments (`process.argv[2]` for the username and `process.argv[3]` for the password).
4. If login is successful, print `SESSION ACTIVE FOR user1`
5. If login fails, print `LOGIN FAILED`

### Hints
* Use `passport-local` to create a local strategy for authentication.
* Use `passport.authenticate()` to authenticate the user.
* Use `process.argv` to get the command-line arguments.

### Input

- `process.argv[2]`: Username
- `process.argv[3]`: Password

Use the following hardcoded user:

```js
{
  id: 1,
  username: "user1",
  password: "password123"
}

### Resources

- (https://www.passportjs.org/packages/passport-local/) – Passport Local Strategy for authenticating users with username and password. [passport-local Strategy]  
- (http://www.passportjs.org/docs/authenticate/) – Usage of `passport.authenticate()` including custom callback for manual control. [passport.authenticate()]  
- (https://www.passportjs.org/concepts/authentication/) – Overview of Passport.js authentication concepts and workflow. [Passport.js Authentication Concepts]  
- (https://www.passportjs.org/concepts/authentication/sessions/) – How Passport manages sessions (serialize/deserialize) — optional if using sessions. [Passport Sessions]


## Problem: Implement Session-Based Authentication with Passport.js

## Objective:
In this exercise, you will implement local authentication using Passport.js for a command-line interface (CLI). You will authenticate a user based on a username and password, and if successful, you will simulate session management by printing a session-active message.

## Requirements:
1. Implement local authentication using Passport.js with hardcoded credentials (`user` as the username and `password123` as the password).
2. Use Passport's `serializeUser()` and `deserializeUser()` to simulate session management (storing and retrieving user data).
3. Accept username and password as command-line arguments using `process.argv[2]` for the username and `process.argv[3]` for the password.
4. After successful authentication, simulate a session and print the message `"SESSION ACTIVE FOR user"`.

## Steps:
1. **Set up Passport.js**:
   - Use the `passport-local` strategy to authenticate a user with the provided username (`user`) and password (`password123`).
   - Implement the `passport.serializeUser()` and `passport.deserializeUser()` methods to simulate session management.

2. **Authenticate via Command Line**:
   - Accept the `username` and `password` from the command line using `process.argv[2]` (username) and `process.argv[3]` (password).
   - Use `passport.authenticate()` to process the authentication.

3. **Session Simulation**:
   - After a successful login, simulate session management by calling `passport.serializeUser()` and `passport.deserializeUser()`.
   - Print the message `SESSION ACTIVE FOR user` if the authentication is successful.

## Hints:
- Use `passport-local` strategy to authenticate users with the username `user` and password `password123`.
- If authentication fails, do not print any output.
- After a successful login, simulate the session using `passport.serializeUser()` and `passport.deserializeUser()`.
- Print the output `SESSION ACTIVE FOR user` when the session is successfully created.

## Example:

#### Command:
```bash
node app.js user password123

### Resources

- (https://www.passportjs.org/concepts/authentication/sessions/) Learn how `serializeUser()` and `deserializeUser()` [Sessions – Passport.js]
- (http://www.passportjs.org/docs/authenticate/#custom-callback)  [Custom Callback in passport.authenticate()]
- (https://github.com/jaredhanson/passport-local)  [passport-local GitHub Repository]
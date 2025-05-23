# Exercise: Local Authentication with Passport.js (CLI)
In this exercise, you will implement local authentication using Passport.js for a command-line interface (CLI). You will authenticate a user based on a username and password, You will use command-line arguments instead of a web form or HTTP server.

### Requirements

1. Use `passport-local` for login authentication.
2. The program will authenticate a user based on a hardcoded username and password.
3. The username and password will be passed as command-line arguments (`process.argv[2]` for the username and `process.argv[3]` for the password).
4. If login is successful, print `SESSION ACTIVE FOR user1`
5. If login fails, print `LOGIN FAILED`

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

- (https://www.passportjs.org/) – Introduction to Passport.js and its authentication ecosystem.  [Passport.js Overview]
- (https://github.com/jaredhanson/passport-local) – GitHub repo with setup and usage of username/password authentication. [Passport-Local Strategy] 
- (http://www.passportjs.org/docs/username-password/) – How to configure and implement the LocalStrategy.  [passport.use() and LocalStrategy]
- (http://www.passportjs.org/docs/authenticate/) – Guide on invoking authentication with or without a custom callback.   [passport.authenticate()]
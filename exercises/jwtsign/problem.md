## Problem: Sign a JWT Token

In this exercise, your goal is to implement JWT signing after successful login using the `passport-jwt` strategy.

### Requirements

1. Authenticate the user using hardcoded credentials (like in the local-login exercise).
2. After successful login, generate a JWT token containing the username and a role (e.g., `user`, `admin`).
3. Print `LOGIN SUCCESS` and the JWT token if authentication is successful.
4. Print `LOGIN FAILED` if authentication fails.

### Hints
1. Use jsonwebtoken to sign the JWT.
2. The JWT should include the username and role as the payload.

Use the following hardcoded user credentials for authentication:

```js
{
  id: 1,
  username: "user1",
  password: "password123",
  role: "user"
}

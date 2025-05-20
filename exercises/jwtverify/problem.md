## Problem: Implement JWT Verification in API Requests

In this exercise, your goal is to implement JWT verification for incoming requests.

- A JWT token will be passed in the `Authorization` header.
- You need to verify the JWT token and ensure that the user can only access a protected route if the token is valid.
- On successful verification, return a success message; otherwise, return a failure message.

Use the `jsonwebtoken` library to validate the token and authenticate the user.

**Hint**: Use the `passport-jwt` strategy to extract and verify the JWT.

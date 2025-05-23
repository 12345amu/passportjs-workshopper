## Problem: Authenticate with Google OAuth using Passport.js (Simulated in CLI)

In this exercise, you'll simulate Google OAuth authentication using the `passport-google-oauth20` strategy in a CLI environment.

Since OAuth2 flows typically require a browser, we'll simulate the callback phase with a hardcoded Google user profile.

### Requirements

1. Use the `passport-google-oauth20` strategy.
2. Simulate a Google user profile using a hardcoded object.
3. Print `LOGIN SUCCESS: Google user authenticated: mockuser@example.com` on success.

### Hints

- Use `passport.use()` with a GoogleStrategy and a dummy clientID/secret.
- Directly call the `verify()` function with a mocked profile.
- Print success message with the user’s email.

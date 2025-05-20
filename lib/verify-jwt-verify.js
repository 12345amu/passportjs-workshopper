const { execFile } = require('child_process');
const path = require('path');
const assert = require('assert');

// Correct path to solution/index.js
const solutionPath = path.join(__dirname, '../exercises/jwt-verify/solution/index.js');

// Function to test JWT verification
function testJwtVerification(token, expectedOutput, callback) {
  execFile('node', [solutionPath, token], (err, stdout, stderr) => {
    if (err) {
      console.error('Error running solution:', err);
      callback(err);
      return;
    }

    try {
      assert.strictEqual(stdout.trim(), expectedOutput.trim());
      console.log(`JWT Verification test passed for token: ${token}`);
      callback(null);
    } catch (e) {
      console.error('Test failed for JWT verification');
      console.error(`Expected: ${expectedOutput}`);
      console.error(`Received: ${stdout}`);
      callback(e);
    }
  });
}

// Define test cases
const token = 'valid-jwt-token'; // Replace with actual token generation logic
const expectedOutput = 'LOGIN SUCCESS\n';

// Run the test
testJwtVerification(token, expectedOutput, (err) => {
  if (err) {
    process.exit(1);
  } else {
    process.exit(0);
  }
});

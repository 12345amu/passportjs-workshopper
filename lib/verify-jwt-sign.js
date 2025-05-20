const { execFile } = require('child_process');
const path = require('path');
const assert = require('assert');

const solutionPath = path.join(__dirname, '../exercises/jwtsign/solution/index.js');

function testJwtSign(username, password, expectedOutput, callback) {
  execFile('node', [solutionPath, username, password], (err, stdout, stderr) => {
    if (err) {
      console.error('Error running solution:', err);
      callback(err);
      return;
    }

    try {
      assert.strictEqual(stdout.trim(), expectedOutput.trim()); // trim whitespace before comparison
      console.log(`JWT sign test passed for ${username}`);
      callback(null);
    } catch (e) {
      console.error(`JWT test failed for ${username}`);
      console.error(`Expected: ${expectedOutput}`);
      console.error(`Received: ${stdout}`);
      callback(e);
    }
  });
}

// Define test cases
const username = 'user1';
const password = 'password123';
const expectedOutput = 'LOGIN SUCCESS\n'; // Adjust as necessary for JWT output

testJwtSign(username, password, expectedOutput, (err) => {
  if (err) {
    process.exit(1);
  } else {
    process.exit(0);
  }
});

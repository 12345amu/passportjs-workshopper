const { execFile } = require('child_process');
const path = require('path');
const assert = require('assert');

const solutionPath = path.join(__dirname, '../exercises/locallogin/solution/index.js');

function testLogin(username, password, expectedOutput, callback) {
  execFile('node', [solutionPath, username, password], (err, stdout) => {
    if (err) return callback(err);

    try {
      assert.strictEqual(stdout.trim(), expectedOutput.trim());
      console.log(`Login test passed for ${username}`);
      callback(null);
    } catch (e) {
      console.error(`Test failed for ${username}`);
      console.error(`Expected: ${expectedOutput}`);
      console.error(`Received: ${stdout}`);
      callback(e);
    }
  });
}

testLogin('user1', 'password123', 'LOGIN SUCCESS', (err) => {
  process.exit(err ? 1 : 0);
});


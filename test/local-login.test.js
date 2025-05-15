const { execFile } = require('child_process');
const path = require('path');
const assert = require('assert');

const solutionPath = path.join(__dirname, '../exercises/locallogin/solution/index.js');

const username = 'user1';
const password = 'password123';
const expectedOutput = 'LOGIN SUCCESS\n';

execFile('node', [solutionPath, username, password], (err, stdout) => {
  if (err) {
    console.error('Test failed to run:', err);
    process.exit(1);
  }

  try {
    assert.strictEqual(stdout, expectedOutput);
    console.log('Local login test passed.');
  } catch (e) {
    console.error('Local login test failed.');
    console.error('Expected:', JSON.stringify(expectedOutput));
    console.error('Received:', JSON.stringify(stdout));
    process.exit(1);
  }
});

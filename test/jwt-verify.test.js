const { execFile } = require('child_process');
const path = require('path');
const assert = require('assert');

const solutionPath = path.join(__dirname, '../solution/index.js');

const token = 'valid-jwt-token'; // Replace with your test JWT token
const expectedOutput = 'LOGIN SUCCESS\n';

execFile('node', [solutionPath, token], (err, stdout, stderr) => {
  if (err) {
    console.error('Test failed to run:', err);
    process.exit(1);
  }

  try {
    assert.strictEqual(stdout, expectedOutput);
    console.log('JWT verification test passed.');
  } catch (e) {
    console.error('JWT verification test failed.');
    console.error('Expected:', JSON.stringify(expectedOutput));
    console.error('Received:', JSON.stringify(stdout));
    process.exit(1);
  }
});

const { execFile } = require('child_process');
const path = require('path');
const assert = require('assert');

const solutionPath = path.join(__dirname, '../exercises/oauth-google/solution/index.js');
const expectedOutput = 'LOGIN SUCCESS: Google user authenticated: mockuser@example.com\n';

execFile('node', [solutionPath], (err, stdout, stderr) => {
  if (err) {
    console.error('Execution error:', err);
    process.exit(1);
  }

  try {
    assert.strictEqual(stdout, expectedOutput);
    console.log(' Google OAuth simulation test passed.');
  } catch (e) {
    console.error(' Google OAuth simulation test failed.');
    console.error('Expected:', JSON.stringify(expectedOutput));
    console.error('Received:', JSON.stringify(stdout));
    process.exit(1);
  }
});

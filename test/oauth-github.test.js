const { execFile } = require('child_process');
const path = require('path');
const assert = require('assert');

const solutionPath = path.join(__dirname, '../solution/index.js');

const expectedOutput = 'LOGIN SUCCESS\n';

execFile('node', [solutionPath], (err, stdout, stderr) => {
  if (err) {
    console.error('Test failed to run:', err);
    process.exit(1);
  }

  try {
    assert.strictEqual(stdout, expectedOutput);
    console.log('GitHub OAuth test passed.');
  } catch (e) {
    console.error('GitHub OAuth test failed.');
    console.error('Expected:', expectedOutput);
    console.error('Received:', stdout);
    process.exit(1);
  }
});

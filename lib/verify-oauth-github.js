const { execFile } = require('child_process');
const path = require('path');
const assert = require('assert');

const solutionPath = path.join(__dirname, '../exercises/oauth-github/solution/index.js');

function testLogin(expectedOutput, callback) {
  execFile('node', [solutionPath], (err, stdout, stderr) => {
    if (err) {
      console.error('Error running solution:', err);
      callback(err);
      return;
    }

    try {
      assert.strictEqual(stdout.trim(), expectedOutput.trim());  // trim whitespace before comparison
      console.log('OAuth GitHub test passed.');
      callback(null);
    } catch (e) {
      console.error('OAuth GitHub test failed.');
      console.error('Expected:', expectedOutput);
      console.error('Received:', stdout);
      callback(e);
    }
  });
}

const expectedOutput = 'LOGIN SUCCESS';  
testLogin(expectedOutput, (err) => {
  if (err) {
    process.exit(1);  
  } else {
    process.exit(0);  
  }
});

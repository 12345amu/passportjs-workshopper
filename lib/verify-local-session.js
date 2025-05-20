const { execFile } = require('child_process');
const path = require('path');
const assert = require('assert');

const solutionPath = path.join(__dirname, '../exercises/localsession/solution/index.js');

const username = 'user';
const password = 'password123';
const expectedOutput = 'SESSION ACTIVE FOR user\n';

execFile('node', [solutionPath, username, password], (err, stdout) => {
  if (err) {
    console.error('Execution error:', err);
    process.exit(1);
  }

  try {
    assert.strictEqual(stdout, expectedOutput);
    console.log(' Session-based login test passed.');
    process.exit(0);
  } catch (e) {
    console.error(' Session-based login test failed.');
    console.error('Expected:', expectedOutput);
    console.error('Received:', stdout);
    process.exit(1);
  }
});






























// const path = require('path');
// const { spawn } = require('child_process');

// module.exports = function verifyLocalSession(submissionPath, callback) {
//   const child = spawn('node', [submissionPath, 'user', 'password123'], {
//     cwd: process.cwd()
//   });

//   let output = '';
  
//   // Capture standard output (stdout)
//   child.stdout.on('data', (data) => {
//     output += data.toString();
//   });

//   // Capture standard error output (stderr)
//   child.stderr.on('data', (data) => {
//     console.error('STDERR:', data.toString());
//   });

//   // Once the child process closes, we verify the output
//   child.on('close', (code) => {
//     // Check if the correct message is printed to stdout
//     const passed = output.includes('Session saved for user: user');
    
//     if (passed) {
//       console.log(`✔ Your solution passed!`);
//     } else {
//       console.log(`✘ No output generated or incorrect output.`);
//     }

//     // Call the callback with the result (true or false)
//     callback(null, passed);
//   });
// };

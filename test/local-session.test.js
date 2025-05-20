const { execFile } = require('child_process');
const path = require('path');
const assert = require('assert');

// Correct path to the solution
const solutionPath = path.join(__dirname, '../exercises/localsession/solution/index.js');

// Test data
const testCases = [
  { username: 'user', password: 'password123', expected: 'SESSION ACTIVE FOR user\n' },
  { username: 'wronguser', password: 'password123', expected: 'LOGIN FAILED\n' },
  { username: 'user1', password: 'wrongpass', expected: 'LOGIN FAILED\n' },
  { username: '', password: '', expected: 'LOGIN FAILED\n' },
];

// Function to run tests
testCases.forEach((testCase, index) => {
  execFile('node', [solutionPath, testCase.username, testCase.password], (err, stdout, stderr) => {
    if (err) {
      console.error(`Error running test ${index + 1}:`, err);
      return;
    }

    try {
      // Remove extra whitespace before comparing
      assert.strictEqual(stdout.trim(), testCase.expected.trim());
      console.log(`Test ${index + 1} passed.`);
    } catch (e) {
      console.error(`Test ${index + 1} failed.`);
      console.error(`Expected: ${testCase.expected}`);
      console.error(`Received: ${stdout.trim()}`);
    }
  });
});

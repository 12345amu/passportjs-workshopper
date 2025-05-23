const { execFile } = require('child_process');
const path = require('path');
const assert = require('assert');

const solutionPath = path.join(__dirname, '../exercises/multistrategy/solution/index.js');

const authType = 'local';  
const username = 'user1';
const password = 'password123';
const expectedOutput = 'LOGIN SUCCESS\n';

execFile('node', [solutionPath, authType, username, password], (err, stdout, stderr) => {
    if (err) {
        console.error('Test failed to run:', err);
        process.exit(1);
    }

    try {
        assert.strictEqual(stdout, expectedOutput);
        console.log('Multi-strategy test passed.');
    } catch (e) {
        console.error('Multi-strategy test failed.');
        console.error('Expected:', JSON.stringify(expectedOutput));
        console.error('Received:', JSON.stringify(stdout));
        process.exit(1);
    }
});

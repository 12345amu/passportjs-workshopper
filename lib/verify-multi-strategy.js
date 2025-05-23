const { execFile } = require('child_process');
const path = require('path');
const assert = require('assert');

const solutionPath = path.join(__dirname, '../exercises/multistrategy/solution/index.js');

function testLogin(authType, username, password, expectedOutput, callback) {
    execFile('node', [solutionPath, authType, username, password], (err, stdout, stderr) => {
        if (err) {
            console.error('Error running solution:', err);
            callback(err);
            return;
        }

        try {
            
            assert.strictEqual(stdout.trim(), expectedOutput.trim());
            console.log(`Login test passed for ${authType} auth with ${username}`);
            callback(null);
        } catch (e) {
            console.error(`Test failed for ${authType} auth with ${username}`);
            console.error(`Expected: ${expectedOutput}`);
            console.error(`Received: ${stdout}`);
            callback(e);
        }
    });
}

testLogin('local', 'user1', 'password123', 'LOGIN SUCCESS', (err) => {
    if (err) {
        console.error('Local login failed');
        process.exit(1);
    }

    testLogin('jwt', 'user1', 'password123', 'LOGIN SUCCESS', (err) => {
        if (err) {
            console.error('JWT login failed');
            process.exit(1);
        }

        console.log('Multi-strategy test passed.');
        process.exit(0);
    });
});

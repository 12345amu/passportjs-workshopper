const path = require('path');
const workshopperExercise = require('workshopper-exercise');
const filecheck = require('workshopper-exercise/filecheck');
const execute = require('workshopper-exercise/execute');
const comparestdout = require('workshopper-exercise/comparestdout');

const exercise = workshopperExercise();

// Check that the submission file exists
exercise.use(filecheck());

// Execute user's submission and solution scripts
exercise.use(execute());

// Compare the stdout of user's script and solution script
exercise.use(comparestdout());

// Provide command-line arguments: JWT token
exercise.addSetup(function (mode, callback) {
  // Simulate JWT token for verification
  const token = 'your-jwt-token-here'; // This should be a real token in a complete setup
  this.submissionArgs = [token];
  this.solutionArgs = [token];

  callback();
});

module.exports = exercise;

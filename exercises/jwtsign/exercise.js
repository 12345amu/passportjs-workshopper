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

// Provide command-line arguments: username and password
exercise.addSetup(function (mode, callback) {
  const username = 'user1';
  const password = 'password123';

  this.submissionArgs = [username, password];
  this.solutionArgs = [username, password];

  callback();
});

module.exports = exercise;

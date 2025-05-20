const path = require('path');
const workshopperExercise = require('workshopper-exercise');
const filecheck = require('workshopper-exercise/filecheck');
const execute = require('workshopper-exercise/execute');
const comparestdout = require('workshopper-exercise/comparestdout');

const exercise = workshopperExercise();

exercise.use(filecheck());
exercise.use(execute());
exercise.use(comparestdout());

exercise.addSetup(function (mode, callback) {
  const username = 'user';
  const password = 'password123';

  this.submissionArgs = [username, password];
  this.solutionArgs = [username, password];

  callback();
});

module.exports = exercise;
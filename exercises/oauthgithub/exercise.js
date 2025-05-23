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
  this.submissionArgs = [];  
  this.solutionArgs = [];    
  callback();
});

module.exports = exercise;

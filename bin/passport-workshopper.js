#!/usr/bin/env node
const workshopper = require('workshopper');
const path = require('path');

workshopper({
  name: 'passport-workshopper',
  title: 'PASSPORT',
  subtitle: 'Authentication strategies using Passport.js',
  exerciseDir: path.join(__dirname, '../exercises'),
  appDir: __dirname,
  helpFile: path.join(__dirname, '../help.txt'),
  menuItems: [],
  languages: ['en'],
});

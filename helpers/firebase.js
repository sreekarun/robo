/* Helper module for firebase integration */

var Firebase = require('firebase');
var mood = new Firebase('https://nextg.firebaseio.com/robo/mood');
var motion = new Firebase('https://nextg.firebaseio.com/robo/motion');

exports.mood = mood;
exports.motion = motion;


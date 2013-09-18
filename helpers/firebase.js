/* Helper module for firebase integration */

var Firebase = require('firebase');
var mood = new Firebase('https://nextg.firebaseio.com/robo/mood');
var motion = new Firebase('https://nextg.firebaseio.com/robo/motion');
var speak = new Firebase('https://nextg.firebaseio.com/robo/speak')

exports.mood = mood;
exports.motion = motion;
exports.speak = speak;


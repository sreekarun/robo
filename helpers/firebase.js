/* Helper module for firebase integration */

var Firebase = require('firebase');
var mood = new Firebase('https://nextg.firebaseio.com/robo/mood');

exports.mood = mood;


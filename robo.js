/*

	ROBO entry point

*/


var RoboEvents = require('./receiver.js');

var twitter = new RoboEvents.Twitter;

twitter.init()
	.on('stream.tweet',function(data){
		console.log(data.text);
	});


var firebase = new RoboEvents.Firebase;

firebase.init()
	.on('moodChange',function(mood){
		console.log(mood + "robo");
	});



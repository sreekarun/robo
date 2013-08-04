/*

	ROBO entry point

*/

var RoboEvents = require('./receiver.js');

var twitter = new RoboEvents.Twitter;
var firebase = new RoboEvents.Firebase;

twitter.init()
	.on('stream.tweet',function(data){
		console.log(data.text);
	});


firebase.init()
	.on('moodChange',function(mood){
		console.log(mood + "robo");
	});



//Test the motion detection module

require('./motion-detection.js');
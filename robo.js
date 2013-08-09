/*

	ROBO entry point

*/

var RoboEvents = require('./receiver.js');
var roboMotion = require('./motion-control.js');


var twitter = new RoboEvents.Twitter;
var firebase = new RoboEvents.Firebase;


twitter.init()
	.on('stream.tweet',function(data){
		console.log(data.text);
	});


firebase.init()
	.on('moodChange',function(mood){
		console.log(mood + "robo");
	})
	.on('motionControl',function(motion){
		console.log(motion + " robo");

		if( roboMotion.board.ready ){
			if( motion == "forward"){
				roboMotion.forward();
			}

			if( motion == "back"){
				roboMotion.back();
			}

			if( motion == "stop"){
				roboMotion.forward();
			}
		}
		
	});




//Test the motion detection module

//require('./motion-detection.js');

//Test the motor module



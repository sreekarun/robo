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

		//check if forward command is there in the stream. If yes move the robo forward

		if(data.text.indexOf('forward') > -1){
			if(roboMotion.board.ready){
				roboMotion.forward();
			}
		}
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
				roboMotion.stop();
			}

			if( motion == "left"){
				roboMotion.turnLeft();
			}

			if( motion == "right"){
				roboMotion.turnRight();
			}
		}
		
	});




//Test the motion detection module

//require('./motion-detection.js');

//Test the motor module



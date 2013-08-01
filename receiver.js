/* Common incoming event bindings are defined in receiver */

var events = require('events');

// Event Namespace
var RoboEvents = {};


/* Twitter Events */

RoboEvents.Twitter = function(){};
RoboEvents.Twitter.prototype = new events.EventEmitter;


RoboEvents.Twitter.prototype.init = function(){
	var self = this;
	var twitterStream = require('./helpers/twitter.js');

	var req = twitterStream.streamSearch('NodeRobo');


	req.addListener('response',function(response){
		response.setEncoding('utf8');
		response.addListener('data', function (chunk) {
			try{
			    var data = JSON.parse(chunk);
			    self.emit('stream.tweet',data);

			}catch(e){
			    console.log('error parsing JSON');
			}
		});

	});

	req.addListener('error', function (error) {
	    console.log('error' + error);
	});
	req.end();
	return self;

}

/* End Twitter Events */



/* Sensor Events */

/* Firebase Events */

RoboEvents.Firebase = function(){};
RoboEvents.Firebase.prototype = new events.EventEmitter;

RoboEvents.Firebase.prototype.init = function(){
	var self = this;
	var roboCloudStorage = require('./helpers/firebase.js');

	roboCloudStorage.mood.on('value',function(snapshot){
		self.emit('moodChange',snapshot.val());
	})


	return self;
}


/* Facebook Events */


/* Expose the RoboEvents Module */
module.exports = RoboEvents;







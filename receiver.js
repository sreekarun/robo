/* Common incoming event bindings are defined in receiver */

var events = require('events');

// Event Namespace
var RoboEvents = {};



RoboEvents.Twitter = function(){};
RoboEvents.Twitter.prototype = new events.EventEmitter;


RoboEvents.Twitter.prototype.init = function(){
	var self = this;
	var twitterStream = require('./helpers/twitter.js');

	var req = twitterStream.streamSearch('google');


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

module.exports = RoboEvents;


/* Sensor Events */

/* Firebase Events */

/* Twitter Events */




/* Facebook Events */




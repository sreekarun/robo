/* Helper methods for twitter integration */

var events = require('events');


/* Stream Search */

var StreamSearch = function(){

}

/* Attach the event emitter powers to StreamSearch */
StreamSearch.prototype = new events.EventEmitter;

StreamSearch.prototype.subscribe = function(term){
	
}





/* Method to perform a twitter search */
exports.search = function(term){

}

/* performs continuous realtime search */
exports.StreamSearch = StreamSearch;


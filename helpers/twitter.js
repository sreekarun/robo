/* Helper methods for twitter integration */

var OAuth= require('oauth').OAuth;

//Twitter configs
var consumer_key ='eI7YORH7fXXtQZ1x2AVF8Q',
	consumer_secret ='LkH3OZNTBCs7zGTEC5dTXnvqKxlIpzGqRD83f9hkzo',
	access_token = '1637899627-UL9zxwxgw5Zo6SUZECWAxxErLiJCZRZbwCyCi4R',
	access_token_secret = 'EaWI5cvNGLXzp6fJxBPNp0uh8bakWnW4VofZSTT0AQ';


var oa = new OAuth("https://twitter.com/oauth/request_token",
                 "https://twitter.com/oauth/access_token",
                 consumer_key, consumer_secret,
                 "1.0A", "http://localhost:3000/oauth/callback", "HMAC-SHA1");


/* Stream Search */

var StreamSearch = function(topic){
	var filterUrl = "https://stream.twitter.com/1.1/statuses/filter.json" + "?track=" + topic;
	var request = oa.get(filterUrl, access_token, access_token_secret );
	return request;
}



/* Method to perform a twitter search */
exports.search = function(topic){

}

/* performs continuous realtime search */
exports.streamSearch = function(topic){
	return StreamSearch(topic);
}


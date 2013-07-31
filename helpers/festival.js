/* Helper method for festival TTS engine */

var exec = require('child_process').exec;
var festivalCmd = "festival -TTS ";

var _speak = function(text){
	cmd = festivalCmd + text;
	exec(festivalCmd, function(error, stdout, stderr){

	})
}



/* Speaks the text out */
exports.speak = function(text){
	_exec(text);
}
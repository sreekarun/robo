/* Helper method for festival TTS engine */

var exec = require('child_process').exec;


var _speak = function(text){
	var cmd = 'echo ' + text + ' | ' + 'festival --tts';
	exec(cmd, function(error, stdout, stderr){

	})
}



/* Speaks the text out */
exports.speak = function(text){
	_speak(text);
}
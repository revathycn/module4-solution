(function(wd){
	var speakWord = "Hello";	

	var helloSpeaker = {
		speak : function(name) {
			console.log(speakWord + " " + name);
		}
	};

	wd.helloSpeaker = helloSpeaker;
})(window);
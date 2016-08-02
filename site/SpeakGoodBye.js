(function(win){
	var speakWord = "Good Bye";
	var byeSpeaker = {
		speak : function(name) {
		  console.log(speakWord + " " + name);
		}
	};
	win.byeSpeaker = byeSpeaker;

})(window);
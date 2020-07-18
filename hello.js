(function(window){
	var hellospeaker={};
	hellospeaker.sayhello=function (name) {
	console.log("Hello SomeOne",name);
	}
	window.hellospeaker=hellospeaker;
})(window);
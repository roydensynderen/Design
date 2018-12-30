(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		i = 0;

	TweenLite.from(img, 1, {
		x: -200, 
		ease:Power1.easeInOut,
		onStart: onStart,
		onUpdate: onUpdate,
		onComplete: onComplete
	});

	function onStart() {
		console.log('Animation started!');
	}
	function onUpdate() {
		// console.log('Animation is playing!');
		h2.text(i++)
	}
	function onComplete() {
		console.log('Animation finished!');
	}

})(jQuery);
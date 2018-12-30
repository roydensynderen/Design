(function($) {
    
	var img = $('img'),
		h2 = $('h2');

	//ease out --> fast to slow
	//ease in --> slow to fast
	//Power[1 - 4]: Strength of ease

	// ease: Power0.easeNone == no ease
	// ease: Power1.easeIn/easeOut == ease in/ease out

	// TweenLite.from(img, 1, {x: -200, ease: Power1.easeOut});
	TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1});

	TweenLite.from(img, 2.5, {ease: Elastic.easeOut.config(1, 0.3), x: -500 });

})(jQuery);
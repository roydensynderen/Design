(function($) {
    
	var img = $('img'),
		h2 = $('h2')

	TweenLite.fromTo(img, 1, {x: -200}, {x: 0});
	// TweenLite.set(img, {x: -200});
	TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1});

})(jQuery);
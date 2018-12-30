(function($) {
    
	var img = $('img'),
		h1 = $('h1'),
		h2 = $('h2'),
		intro = $('.intro'),
		listItem = $('ul li'),
		tl = new TimelineLite();

	tl
		.from(h1, .3, {y: -15, autoAlpha: 0, ease: Power1.easeOut})
		.from(intro, .3, {y: -15, autoAlpha: 0, ease: Power1.easeOut}, '-=0.15')
		.from(img, .3, {y: -15, autoAlpha: 0, ease: Power1.easeOut}, '-=0.15')
		.from(h2, .3, {y: -15, autoAlpha: 0, ease: Power1.easeOut}, '-=0.15')
		.from(listItem, .3, {y: -15, autoAlpha: 0, ease: Power1.easeOut}, '-=0.15');

})(jQuery);
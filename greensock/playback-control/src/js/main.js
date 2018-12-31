(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		tl = new TimelineLite();

	tl
		.from(h1, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(intro, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(img, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(h2, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(listItem, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut});

	tl.pause();

	$('#btnPlay').on('click', function() {
		tl.play();
	});

	$('#btnPause').on('click', function() {
		tl.pause();
	});

	$('#btnResume').on('click', function() {
		tl.resume();
	});

	$('#btnReverse').on('click', function() {
		tl.reverse();
	});

	$('#btnSpeedUp').on('click', function() {
		tl.timeScale(4);
	});

	$('#btnSlowDown').on('click', function() {
		tl.timeScale(0.5);
	});

	$('#btnSeek').on('click', function() {
		tl.seek(1);
	});

	$('#btnProgress').on('click', function() {
		tl.progress(0.5);
	});

	$('#btnRestart').on('click', function() {
		tl.restart();
	});

})(jQuery);







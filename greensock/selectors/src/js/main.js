(function($){

	var header = $('#header'),
		h1 = $('h1'),
		intro = $('.intro'),
		firstItem = $('li:first-child'),
		secondItem = $('li:nth-child(2)'),
		lastItem = $('li:last-child');

	TweenLite.to(intro, 1, {opacity: 0, y: 50});

})(jQuery);

(function($) {

	var box = $('.box'),
		boxSVG = $('#boxSVG'),
		boxHTML = $('#boxHTML'),
		htmlDot = $('#htmlDOT'),
		svgDot = $('#boxSVG .circ'),
		tl = new TimelineLite({paused: true});

	tl
		.to(boxHTML, 0.7, {x: '100%', y: '100%', ease:Power2.easeInOut})
		.to(boxSVG, 0.7, {x: '100%', y: '100%', ease:Power2.easeInOut})
		.addPause()
		.to(boxHTML, 0.7, {x: '50%', y: '50%', ease:Power2.easeInOut})
		.to(boxSVG, 0.7, {x: '50%', y: '50%', ease:Power2.easeInOut})
		.addPause()
		.to(boxHTML, 0.7, {left: '50%', top: '50%', x: '-50%', y: '-50%', ease:Power2.easeInOut})
		.to(htmlDot, 0.7, {left: 0, top: 0, ease:Power2.easeInOut})
		.addPause()
		.to(boxSVG, 0.7, {left: '50%', top: '50%', x: '-50%', y: '-50%', ease:Power2.easeInOut})
		.to(svgDot, 0.7, {attr:{cx: 0, cy: 0}, ease:Power2.easeInOut})
		.addPause()
		.to(boxHTML, 0.7, {rotation: 90, transformOrigin: '100% 100%', ease:Power2.easeInOut})
		.addPause()
		.to(boxSVG, 0.7, {rotation: 90, transformOrigin: '100% 100%', ease:Power2.easeInOut})
		.addPause()
		.to(boxHTML, 0.7, {xPercent: -100, rotation: 0, ease:Power2.easeInOut})
		.addPause()
		.to(boxSVG, 0.7, {x: '0%', rotation: 0, ease:Power2.easeInOut})
		.addPause()
		.to(htmlDot, 0.7, {left: '50%', top: '50%', ease: Power2.easeInOut})
		.to(svgDot, 0.7, {attr: {cx: 100, cy: 100}, ease: Power2.easeInOut}, '-=0.7')
		.addPause()
		.to([boxSVG, boxHTML], 0.7, {rotation: 720, transformOrigin: '50% 50%', ease: Power2.easeInOut})
		.addPause()
		.to(boxHTML, 0.7, {rotationX: -180, transformOrigin: '0% 50%', ease: Power2.easeInOut})
		.to(boxSVG, 0.7, {rotationY: -180, transformOrigin: '100% 50%', ease: Power2.easeInOut})
		.addPause()
		.to(boxHTML, 0.7, {rotationX: -360, ease: Power2.easeInOut})
		.to(boxSVG, 0.7, {rotationY: -360, ease: Power2.easeInOut})
		.addPause()

	$('#btnNext').on('click',function(){
		tl.play();
	});

	$('#btnPrev').on('click',function(){
		tl.reverse();
	});

})(jQuery);







$(document).ready(function(){

	$('.focuspoint').focusPoint();

	// Setup variables
	$bcgMaster = $('#bcg-01 img');
	$imacSVG = $('#imacSVG');

	// Default SVG offsets
	var svgWidth = $bcgMaster.width(),
		svgHeight = $bcgMaster.height(),
		svgTop = $bcgMaster.css('top'),
		svgLeft = $bcgMaster.css('left');

	// Resize SVG on page load
	resizeSVG(svgWidth, svgHeight, svgTop, svgLeft);

	//On window resize
	$(window).resize(function(){

		setTimeout(function(){

			// Updated SVG offsets
			svgWidth = $bcgMaster.width(),
			svgHeight = $bcgMaster.height(),
			svgTop = $bcgMaster.css('top'),
			svgLeft = $bcgMaster.css('left');

			// Resize SVG on page resize
			resizeSVG(svgWidth, svgHeight, svgTop, svgLeft);

		}, 100);

	});

	function resizeSVG(svgWidth, svgHeight, svgTop, svgLeft){
		$imacSVG
			.height(svgHeight)
			.width(svgWidth)
			.css({left: svgLeft, top: svgTop});
	}

});

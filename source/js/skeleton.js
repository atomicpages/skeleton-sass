(function ($) {
	'use strict';

	function move(element, speed) {
		$(element).delay(800).animate({bottom: "-=20"}, speed, function() {
			$(this).fadeOut(200, function() {
				$(this).css("bottom", "+=20");
			});
			$(this).fadeIn(200, function() {
				move(element, speed);
			});
		});
	}

	$("span[data-date]").text(new Date().getFullYear());

	$(".nav a[data-scroll]").click(function(e) {
		e.preventDefault();
	});

	var $grid = $('#grid');

	$grid.submit(function (e) {
		e.preventDefault();
	});

	$grid.keyup(function () {
		var gutter = parseInt($('input[name="gutter"]').val());
		var cols = parseInt($('input[name="cols"]').val());
		var width = parseInt($('input[name="width"]').val());
		var $total = ( width + gutter ) * cols;

		$('.content_width').text($total - gutter + 'px');

		$('.full_width').text($total + 'px');

		$('.vars').text('// Copy and paste these in your global config file to override ' +
			'the grid\n$base-col-width: '
			+ width + 'px;\n$base-gutter-width: '
			+ gutter + 'px;\n$base-col-count: '
			+ cols + ';');
	});

	move(".fa-arrow-down", 500);

	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});

}(jQuery));

smoothScroll.init({
	speed: 1000,
	easing: 'easeInOutQuad'
});

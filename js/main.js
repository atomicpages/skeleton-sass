$(document).ready(function() {

	if(navigator.platform == "Win32") {
		$(".fa-circle-thin").css("left", "15px");
		if(navigator.msManipulationViewsEnabled || navigator.hasOwnProperty("mozId")) {
			$(".fa-arrow-down").css("right", "60px");
		}
	}

	if(navigator.platform == "MacIntel") {
		$(".fa-circle-thin").css("left", "8px");
		if(navigator.hasOwnProperty("mozId") || navigator.vendor === "Apple Computer, Inc.") {
			$(".fa-arrow-down").css("right", "60px");
		}
	}

	var move = function(target, speed) {
		$(target).delay(800).animate({bottom: "-=20"},
			speed,
			function() {
				$(this).fadeOut(200, function() {
					$(this).css("bottom", "+=20");
				});
				$(this).fadeIn(200, function() {
					move(target, speed);
				});
			}
		);
	};

	move(".fa-arrow-down", 500);

	$("section.home").height( $(window).height() );
	if( $(window).width() < 768 ) {
		$("section.home").height("auto").addClass("row");
	}
	$(window).resize(function() {
		$("section.home").height( $(window).height() );
		if( $(this).width() < 768 ) {
			$("section.home").height("auto").addClass("row");
		} else {
			$("section.home").height( $(window).height() ).removeClass("row");
		}
	});

	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});

});

 smoothScroll.init({
 	speed: 1000,
 	easing: 'easeInOutQuad',
 });

$("#grid").submit(function(e) {
	e.preventDefault();
});

$("#grid").keyup(function() {
	var gutter = parseInt($("input[name='gutter']").val());
	var cols = parseInt($("input[name='cols']").val());
	var width = parseInt($("input[name='width']").val());
	var $total = ( width + gutter ) * cols;
	$(".content_width").text($total - gutter + "px");
	$(".full_width").text($total + "px");
	$(".vars").text("// Copy and paste these in your global config file to override the grid\n$base-col-width: " + width + "px;\n$base-gutter-width: " + gutter + "px;\n$base-col-count: " + cols + ";");
});

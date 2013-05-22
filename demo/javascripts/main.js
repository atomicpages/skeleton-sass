$(document).ready(function() {
	var $h = $(window).height();
	var $w = $(window).width();
	$('.default, .resize').text($w + "px X " + $h + "px");

	$("#mmf").click(function() {
		if( !$('body').hasClass('fluid') ) {
			$('body').addClass('fluid');
			$("#mmf").text("Make me Fixed!");
			$("#width_control").attr('type', 'number');
			$('#stylesheet').attr('href', 'stylesheets/skeleton-fluid.css');
			$('#width_control').change(function() {
				$('.container').width( $(this).val() + "%" );
			});
		} else {
			$('body').removeClass('fluid');
			$("#mmf").text("Make me Fluid!");
			$("#width_control").val(92);
			$("#width_control").attr('type', 'hidden');
			$('#stylesheet').attr('href', 'stylesheets/skeleton.css');
			$('.container').removeAttr('style');
		}
	});

	$('#twelve').click(function() {
		$.get('demo-12.html', function(data) {
			$('#content').html(data);
		});
		if( $('body').hasClass('fluid') ) {
			$("#mmf").text("Make me Fluid!");
			$("#width_control").attr('type', 'hidden');
			$("#width_control").val(92);
			$('.container').removeAttr('style');
		}
		$('body').addClass('fixed twelve');
		$('#stylesheet').attr('href', 'stylesheets/skeleton-twelve.css');
	});

	$('#twenty').click(function() {
		$.get('demo-20.html', function(data) {
			$('#content').html(data);
		});
		$('body').addClass('fixed twenty');
		$('#stylesheet').attr('href', 'stylesheets/skeleton-twenty.css');
	});

	$("#reset").click(function() {
		location.reload();
	});

	$(window).resize(function() {
		var h = $(window).height();
		var w = $(window).width();
		$('.resize').text(w + "px X " + h + "px");
		if( $(window).width() <= 479) {
			$('.container').removeAttr('style');
			$("#width_control").attr('type', 'hidden');
			$("#width_control").val(92);
		}
		if( $('body').hasClass('fluid') && $(window).width() > 479 ) {
			$("#width_control").attr('type', 'number');
		}
	});

});

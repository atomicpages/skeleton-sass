$(document).ready(function() {
	var $h = $(window).height();
	var $w = $(window).width();
	$('.default, .resize').text($w + "px X " + $h + "px");

	$("#mmf").click(function() {
		if( !$('body').hasClass('fluid') ) {
			$('body').addClass('fluid');
			$("#mmf").text("Make me Fixed!");
			$("#width_control").attr('type', 'number');
			$('#width_control').change(function() {
				$('.container').width( $(this).val() + "%" );
			});
		} else {
			$('body').removeClass('fluid');
			$("#mmf").text("Make me Fluid!");
			$("#width_control").val(92);
			$("#width_control").attr('type', 'hidden');
			$('.container').removeAttr('style');
		}
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
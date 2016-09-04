$(document).ready(function () {

	var $h = $(window).height();
	var $w = $(window).width();
	$('.default, .resize').text($w + "px X " + $h + "px");

	$(window).resize(function () {
		var h = $(window).height();
		var w = $(window).width();
		$('.resize').text(w + "px X " + h + "px");
		if ($(window).width() <= 479) {
			$('.container').removeAttr('style');
			$("#width_control").attr('type', 'hidden');
			$("#width_control").val(92);
		}
		if ($('body').hasClass('fluid') && $(window).width() > 479) {
			$("#width_control").attr('type', 'number');
		}
	});

	$("nav a").click(function (e) {
		e.preventDefault();
		switch ($(this).attr("data-suffix")) {
			case "fluid":
				var styles = {".container": {"width": "98%"}};
				addInternalStyles(styles);
				swapStyleSheet("fluid");
				loadContent("fluid");
				$("nav ul ul").fadeIn(200);
				$("#ss-fluid-width").change(function () {
					$(".container").css("width", $(this).val() + "%");
				});
				break;
			case "12":
				removeInternalStyles();
				swapStyleSheet("12");
				loadContent("12");
				break;
			case "1040px":
				removeInternalStyles();
				swapStyleSheet("1040px");
				loadContent("1040px");
				break;
			case "1280px":
				removeInternalStyles();
				swapStyleSheet("1280px");
				loadContent("1280px");
				break;
			default:
				location.reload();
				break;
		}
	});

	/**
	 * @param {string} suffix
	 */
	function swapStyleSheet(suffix) {
		$("#ss-grid").attr("href", "css/skeleton-" + suffix + ".css");
	}

	function loadContent(suffix) {
		$("main").load("templates/demo-" + suffix + ".html .container");
	}

	/* {
	 "selector": {
	 "p1": "v1",
	 "p2": "v2"
	 },
	 "s1": { "p": "v" }
	 } */
	function addInternalStyles(styles) {
		for (var selector in styles) {
			$("#ss-override").append("\n" + selector + " {");
			for (var property in styles[selector]) {
				$("#ss-override").append("\n\t" + property + ": " + styles[selector][property] + ";");
			}
			$("#ss-override").append("\n}");
		}
	}

	function removeInternalStyles() {
		$("#ss-override").text("");
		if ($("#ss-fluid-width").is(":visible")) {
			$("nav ul ul").fadeOut(200);
		}
		if ($(".container").attr("style") !== "") {
			$(".container").attr("style", "");
		}
	}

});

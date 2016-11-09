function ready(fn) {
	if (document.readyState !== 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(function () {
	'use strict';

	document.querySelector('[data-date]').textContent = new Date().getFullYear();

	var _registerEvents = function () {
		var nav_items = document.querySelectorAll('.nav a[data-scroll]');
		var $grid = document.getElementById('grid');

		Array.prototype.forEach.call(nav_items, function (element, i) {
			element.addEventListener('click', function (e) {
				e.preventDefault();
				Jump(document.getElementById(e.srcElement.getAttribute('href').replace('#', '')));
			});
		});

		$grid.addEventListener('keyup', function (e) {
			var gutter = parseInt($grid.querySelector('input[name="gutter"]').value);
			var cols = parseInt($grid.querySelector('input[name="cols"]').value);
			var width = parseInt($grid.querySelector('input[name="width"]').value);
			var total = (width + gutter) * cols;

			document.getElementsByClassName('content_width')[0].textContent = ((total - gutter) + 'px');
			document.getElementsByClassName('full_width')[0].textContent = (total + 'px');

			document.getElementsByClassName('vars')[0].textContent = '// Copy and paste these in your global config file to override ' +
					'the grid\n$base-col-width: '
					+ width + 'px;\n$base-gutter-width: '
					+ gutter + 'px;\n$base-col-count: '
					+ cols + ';';
			});
	};

	_registerEvents();
});

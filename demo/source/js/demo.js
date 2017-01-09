(function () {

    'use strict';

    var preset = 'fluid';
    var loaded = 'content';

    var moveActive = function (after) {
        var before = document.querySelector('.active');
        if (before) {
            before.classList.remove('active');
        }

        if (after) {
            after.classList.add('active');
        }
    };

    var loadNewStyles = function (name) {
        var loadedGrid = document.head.getElementsByClassName('grid')[0]
        var activeGrid = loadedGrid.getAttribute('href').replace('-16', '');
        loadedGrid.setAttribute('href', activeGrid.replace(/\w+\.css/i, name + '.css'));
    };

    var get = function (url) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                var parent = document.querySelector('main');
                for (var i = 0; i < parent.children.length; i++) {
                    parent.removeChild(parent.children[i]);
                }

                var element = document.createElement('section');
                element.innerHTML = this.response;
                parent.appendChild(element);
            } else {
                // TODO: handle error
            }
        };

        request.onerror = function () {
            // TODO: handle error
        };

        request.send();
    };

    get('target/html/content.html');

    var select = document.querySelector('.themes-chooser');

    select.addEventListener('change', function (e) {
        var theme = e.target.value;
        var loadedTheme = document.head.getElementsByClassName('theme')[0];
        var activeTheme = loadedTheme.getAttribute('href');
        loadedTheme.setAttribute('href', activeTheme.replace(/\w+\.css/i, theme + '.css'));
    });

    var buttons = document.querySelectorAll('nav button');
    if (buttons.length > 0) {
        buttons.forEach(function (button) {
            button.addEventListener('click', function (e) {
                var preset = e.target.getAttribute('preset');
                if (preset) {
                    loadNewStyles(preset);
                }

                var template = e.target.getAttribute('template');
                if (template) {
                    get('target/html/16-col.html');
                    loaded = '16-col';
                    loadNewStyles(loaded);
                } else {
                    if (loaded !== 'content') {
                        get('target/html/content.html');
                        loaded = 'content';
                    }
                }
                moveActive(e.target);
            });
        });
    }

}());
